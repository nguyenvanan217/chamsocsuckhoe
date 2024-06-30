import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addDays, format, parseISO } from 'date-fns';
import { addChildCheckupHistory, fetchChildCheckupHistoryById, updateChildCheckupHistory } from '../../api/apiClient';

function ChildrenPerDisInfor() {
    const [userId, setUserId] = useState();
    let { id, isCheckOrUpdate } = useParams();
    const [isUpdate, setIsUpdate] = useState(JSON.parse(isCheckOrUpdate));
    const navigate = useNavigate();
    const [childCheckupData, setChildCheckupData] = useState({
        name: "",
        gender: "",
        birth_date: "",
        regular_check_up_date: "",
        height: "",
        weight: "",
        condition_description: "",
        user_id: null,
    })
    useEffect(() => {
        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            const parsedUserId = JSON.parse(user_id);
            setUserId(parsedUserId);

            // Cập nhật medicalHistory sau khi userId được thiết lập
            setChildCheckupData(prevState => ({
                ...prevState,
                user_id: parsedUserId
            }));
        } else {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        const getChildCheckupHistory = async () => {
            try {
                const data = await fetchChildCheckupHistoryById(id);
                setChildCheckupData({ ...data[0], birth_date: data[0].birth_date.split('T')[0], regular_check_up_date: data[0].regular_check_up_date.split('T')[0] });
            } catch (error) {
                console.error("Failed to fetch child chekup history data", error);
            }
        };

        if (userId && id !== "0") {
            getChildCheckupHistory();
        }
    }, [userId, id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setChildCheckupData(prevState => ({
            ...prevState,
            [name]: name === "vaccination_dates" ? value.split('T')[0] : value
        }));

    };

    const handleSubmit = async (key) => {
        switch (key) {
            case "cancel":
                setIsUpdate(false);
                break;
            case "update":
                setIsUpdate(true);
                break;
            case "add":
                await addChildCheckupHistory(childCheckupData);
                navigate("/lichsukhamtreem")
                break;
            case "save":
                try {
                    await updateChildCheckupHistory(id, {
                        ...childCheckupData,
                        birth_date: format(addDays(parseISO(childCheckupData.birth_date), 1), 'yyyy-MM-dd'),
                        regular_check_up_date: format(addDays(parseISO(childCheckupData.regular_check_up_date), 1), 'yyyy-MM-dd')
                    });
                    setIsUpdate(false); // Đặt lại trạng thái chỉnh sửa sau khi lưu thành công
                } catch (error) {
                    console.error("Error updating child chekup history", error);
                    // Xử lý lỗi, ví dụ hiển thị thông báo cho người dùng
                }
                break;
            default:
                break;
        }

    };
    return (
        <div>
            <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                Thông Tin Khám Định Kỳ Trẻ Em
            </h1>
            <div className="w-[1350px] flex justify-end">
                <Link to="/lichsukhamtreem">
                    <button className='bg-green-500 text-white px-7 py-1 text-[17px] rounded-[3px] mt-5'>Quay lại</button>
                </Link>
            </div>
            <div className="w-[1050px] bg-[#38BDF8] rounded-lg mt-5 p-14 flex flex-col gap-10 justify-center items-center mx-auto">
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Họ Tên Trẻ Em</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={childCheckupData.name}
                        onChange={handleChange}
                        name='name'
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Giới tính</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={childCheckupData.gender}
                        onChange={handleChange}
                        name='gender'
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Ngày sinh</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={childCheckupData.birth_date}
                        onChange={handleChange}
                        name='birth_date'
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Ngày khám định kỳ</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={childCheckupData.regular_check_up_date}
                        onChange={handleChange}
                        name='regular_check_up_date'
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Chiều cao (cm)</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={childCheckupData.height}
                        onChange={handleChange}
                        name='height'
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Cân nặng (kg)</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={childCheckupData.weight}
                        onChange={handleChange}
                        name='weight'
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Mô tả tình trạng</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={childCheckupData.condition_description}
                        onChange={handleChange}
                        name='condition_description'
                        disabled={!isUpdate}
                    />
                </div>
            </div>
            <div className="mt-9 flex justify-center gap-10">
                {id !== "0" &&
                    (
                        isUpdate
                            ?
                            <button
                                onClick={() => handleSubmit("cancel")}
                                className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                            >
                                Huỷ
                            </button>
                            :
                            <button
                                onClick={() => handleSubmit("update")}
                                className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                            >
                                Chỉnh sửa
                            </button>
                    )}

                {isUpdate &&
                    (id !== "0" ?
                        <button
                            onClick={() => handleSubmit("save")}
                            className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                        >
                            Lưu thông tin
                        </button>
                        : <button
                            onClick={() => handleSubmit("add")}
                            className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                        >
                            Thêm thông tin
                        </button>)
                }
            </div>
        </div>
    );
}

export default ChildrenPerDisInfor;
