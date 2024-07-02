import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addVaccinationHistory, fetchVaccinationHistoryById, updateVaccinationHistory } from '../../api/apiClient';
import { addDays, format, parseISO } from 'date-fns';

function Vaccination() {
    const [userId, setUserId] = useState();
    let { id, isCheckOrUpdate } = useParams();
    const [isUpdate, setIsUpdate] = useState(JSON.parse(isCheckOrUpdate));
    const navigate = useNavigate();
    const [vaccinationData, setVaccinationData] = useState({
        vaccination_dates: "",
        vaccination_names: "",
        vaccination_rooms: "",
        post_vaccination_status: "",
        caccination_costs: "",
        user_id: null,
    })

    const [vaccinationDataPrev, setVaccinationDataPrev] = useState({
        vaccination_dates: "",
        vaccination_names: "",
        vaccination_rooms: "",
        post_vaccination_status: "",
        caccination_costs: "",
        user_id: null,
    })

    useEffect(() => {
        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            const parsedUserId = JSON.parse(user_id);
            setUserId(parsedUserId);

            // Cập nhật medicalHistory sau khi userId được thiết lập
            setVaccinationData(prevState => ({
                ...prevState,
                user_id: parsedUserId
            }));
            setVaccinationDataPrev(prevState => ({
                ...prevState,
                user_id: parsedUserId
            }));
        } else {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        const getVaccinationHistory = async () => {
            try {
                const data = await fetchVaccinationHistoryById(id);
                setVaccinationData({ ...data[0], vaccination_dates: data[0].vaccination_dates.split('T')[0] });
                setVaccinationDataPrev({ ...data[0], vaccination_dates: data[0].vaccination_dates.split('T')[0] });
            } catch (error) {
                console.error("Failed to fetch vaccination history data", error);
            }
        };

        if (userId && id !== "0") {
            getVaccinationHistory();
        }
    }, [userId, id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setVaccinationData(prevState => ({
            ...prevState,
            [name]: name === "vaccination_dates" ? value.split('T')[0] : value
        }));

    };

    const handleSubmit = async (key) => {
        switch (key) {
            case "cancel":
                setIsUpdate(false);
                setVaccinationData(vaccinationDataPrev)
                break;
            case "update":
                setIsUpdate(true);
                break;
            case "add":
                await addVaccinationHistory({
                    ...vaccinationData,
                    vaccination_dates: vaccinationData.vaccination_dates && format(addDays(parseISO(vaccinationData.vaccination_dates), 1), 'yyyy-MM-dd')
                });
                navigate("/lichsutiemphong")
                break;
            case "save":
                try {
                    await updateVaccinationHistory(id, {
                        ...vaccinationData,
                        vaccination_dates: format(addDays(parseISO(vaccinationData.vaccination_dates), 1), 'yyyy-MM-dd')
                    });
                    setIsUpdate(false); // Đặt lại trạng thái chỉnh sửa sau khi lưu thành công
                } catch (error) {
                    console.error("Error updating vaccination history", error);
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
                Thông Tin Tiêm Phòng
            </h1>
            <div className="w-[1350px] flex justify-end">
                <Link to="/lichsutiemphong">
                    <button className='bg-green-500 text-white px-7 py-1 text-[17px] rounded-[3px] mt-5'>Quay lại</button>
                </Link>
            </div>
            <div className="w-[1050px] bg-[#38BDF8] rounded-lg mt-5 p-14 flex flex-col gap-10 justify-center items-center mx-auto">
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Ngày dự định</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={vaccinationData.vaccination_dates}
                        onChange={handleChange}
                        name="vaccination_dates"
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Tên Vắc-xin</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={vaccinationData.vaccination_names}
                        onChange={handleChange}
                        name="vaccination_names"
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Phòng Bệnh</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={vaccinationData.vaccination_rooms}
                        onChange={handleChange}
                        name="vaccination_rooms"
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Tình Trạng Sau Tiêm</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-white"
                        value={vaccinationData.post_vaccination_status}
                        onChange={handleChange}
                        name="post_vaccination_status"
                        disabled={!isUpdate}
                    />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2 font-bold">Chi Phí Tiêm Phòng</p>
                    <input type="text" className="w-[141px] h-[37px] outline-none px-2 text-white bg-red-400 placeholder-white" placeholder='VNĐ'
                        value={vaccinationData.caccination_costs}
                        onChange={handleChange}
                        name="caccination_costs"
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

export default Vaccination;
