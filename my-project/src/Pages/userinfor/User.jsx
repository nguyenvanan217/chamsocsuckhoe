import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { useNavigate } from 'react-router-dom';
import { fetchUserDatasById, updateUser } from '../../api/apiClient';

function User() {
    const [userId, setUserId] = useState();
    const navigate = useNavigate();
    const [isUpdate, setIsUpdate] = useState(false);
    const [isCheckNull, setIsCheckNull] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });
    const [userDataPrev, setUserDataPrev] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        document.title = "Thông tin tài khoản - Bộ Y Tế"
        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            setUserId(JSON.parse(user_id));
        } else {
            navigate('/');
        }
    }, [navigate])

    useEffect(() => {
        const getMedicalHistory = async () => {
            if (userId) {
                try {
                    const data = await fetchUserDatasById(userId);
                    setUserData(data[0]);
                    setUserDataPrev(data[0]);
                } catch (error) {
                    console.error("Failed to fetch user data", error);
                }
            }
        };
        getMedicalHistory();
    }, [userId])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (key) => {
        switch (key) {
            case "cancel":
                setIsUpdate(false);
                setUserData(userDataPrev);
                setIsCheckNull(false);
                break;
            case "update":
                setIsUpdate(true);
                break;
            case "save":
                try {
                    if (userData.name && userData.password) {
                        await updateUser(userId, userData);
                        setIsUpdate(false); // Đặt lại trạng thái chỉnh sửa sau khi lưu thành công
                        setIsCheckNull(false);
                    } else {
                        console.log("Name or password is empty");
                        setIsCheckNull(true);
                    }
                } catch (error) {
                    console.error("Error", error);
                    // Xử lý lỗi, ví dụ hiển thị thông báo cho người dùng
                }
                break;
            default:
                break;
        }

    };

    return (
        <div>
            <Menu />
            <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                Thông Tin Tài Khoản
            </h1>
            <div className="w-[1050px] bg-[#38BDF8] rounded-lg mt-14 p-14 flex flex-col gap-10 justify-center items-center mx-auto">
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Tên tài khoản</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-white"
                        onChange={handleChange}
                        name='name'
                        value={userData.name}
                        disabled={!isUpdate} />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Số điện thoại</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-white"
                        onChange={handleChange}
                        name='phone'
                        value={userData.phone}
                        disabled={!isUpdate} />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Địa chị email</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-white"
                        onChange={handleChange}
                        name='email'
                        value={userData.email}
                        disabled={!isUpdate} />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Mật khẩu</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-white"
                        onChange={handleChange}
                        name='password'
                        value={userData.password}
                        disabled={!isUpdate} />
                </div>
                {isCheckNull ? <span className='text-[12px] text-[red]'>Không được để trống 2 trường 'Tên tài khoản' và 'mật khẩu'</span> : null}
            </div>
            <div className="mt-9 flex justify-center gap-10">
                {
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
                }

                {isUpdate &&
                    <button
                        onClick={() => handleSubmit("save")}
                        className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                    >
                        Lưu thông tin
                    </button>
                }
            </div>
        </div>
    );
}

export default User;
