import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { fetchMedicalHistoryById } from '../../api/apiClient';

function InforMedical({ }) {
    const [medicalHistory, setMedicalHistory] = useState([]);
    const [userId, setUserId] = useState();
    const navigate = useNavigate();

    // lấy id người dùng vừa đăng nhập và kiểm tra đăng nhập
    useEffect(() => {
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
                    const data = await fetchMedicalHistoryById(8);
                    setMedicalHistory(data[0]);
                    console.log(medicalHistory);
                } catch (error) {
                    console.error("Failed to fetch user data", error);
                }
            }
        };
        getMedicalHistory();
    }, [userId])
    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Điền Thông Tin Khám Chữa Bệnh
                </h1>
            </div>
            <div className="w-[1350px] mx-auto">
                <div className='w-full flex justify-end'>
                    <button className='bg-green-500 px-2 w-[170px] h-[55px] rounded-lg text-white font-bold mt-4 block text-center text-bold"'>
                        Lịch sử Khám Bệnh
                    </button>
                </div>
                <div className="text-2xl my-4">Thông tin Khám Chữa Bệnh</div>
                <div className="flex gap-8 flex-wrap">
                    <div>
                        <p className="mb-2">
                            Tên Bệnh Viện/Phòng Khám <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">
                            Ngày Khám Bệnh <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="date" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
                    <div>
                        <p className="mb-2">
                            Triệu Chứng <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
                    <div>
                        <p className="mb-2">
                            Mô tả triệu chứng <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">
                            Tiểu sử bệnh di truyền <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">
                            Tiểu sử bệnh lý <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
                </div>
                <p className="mt-5 font-bold">1/ Khám lâm sàn</p>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Nhiệt độ cơ thể (&#176;C)</p>
                        <input type="text" className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black" />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Nhịp Tim (bpm) </p>
                        <input type="text" className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black" />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Huyết áp (mm/Hg) </p>
                        <input type="text" className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black" />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Đường huyết (mg/dl)</p>
                        <input type="text" className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black" />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Chiều cao (cm) </p>
                        <input type="text" className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black" />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Cân nặng (kg) </p>
                        <input type="text" className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black" />
                    </div>
                </div>
            </div>
            <div className="w-[1350px] mx-auto mt-[20px]">
                <div>
                    <div>
                        <p className="mt-5 font-bold">2/ Chuẩn đoán</p>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <p className="mb-2">
                                Chuẩn đoán ban đầu (trước khi xét nghiệm) <span className="text-red-700">(&#42;)</span>
                            </p>
                            <input type="text" className="border w-80 h-9 outline-none px-2 text-[#A3AAB5]" />
                        </div>
                        <div>
                            <p className="mb-2">
                                Tên bệnh (sau khi xét nghiệm) <span className="text-red-700">(&#42;)</span>
                            </p>
                            <input type="text" className="border w-80 h-9 outline-none px-2 text-[#A3AAB5]" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mt-5 font-bold">3/ Phác đồ điều trị</p>
                </div>
            </div>
            <div className="w-[1350px] mx-auto mt-[20px] flex justify-between">
                <div>
                    <p className="mb-2">
                        Thuốc uống chính <span className="text-red-700">(&#42;)</span>
                    </p>
                    <input type="text" className="border w-80 h-9 outline-none px-2 text-[#A3AAB5]" />
                </div>
                <div className="mb-4">
                    <p className="mb-2 text-gray-700">
                        Hình ảnh <span className="text-red-700">(&#42;)</span>
                    </p>
                    <label className="block">
                        <span className="sr-only">Chọn Ảnh</span>
                        <input
                            type="file"
                            className="block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-lg file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-[#38BDF8]file:text-[#38BDF8]
                                    file:cursor-pointer"
                            placeholder="Thêm IMG"
                        />
                    </label>
                </div>
                <div>
                    <p className="mb-2">
                        Nội dung (nếu có) <span className="text-red-700">(&#42;)</span>
                    </p>
                    <input type="text" className="border w-80 h-9 outline-none px-2 text-[#A3AAB5]" />
                </div>
            </div>

            <div className="w-[1350px] mx-auto mt-[20px] flex justify-between">
                <div>
                    <p className="mb-2">
                        Chế độ ăn uống sinh hoạt: <span className="text-red-700">(&#42;)</span>
                    </p>
                    <input type="text" className="border w-80 h-9 outline-none px-2 text-[#A3AAB5]" />
                </div>
                <div>
                    <p className="mb-2">
                        Ngày hẹn tái khám <span className="text-red-700">(&#42;)</span>
                    </p>
                    <input type="date" className="border w-80 h-9 outline-none px-2 text-[#A3AAB5]" />
                </div>
                <div>
                    <p className="mb-2 text-red-800">Chi phí khám bệnh</p>
                    <input type="text" className="border w-80 h-9 outline-none px-2 text-[#A3AAB5]" />
                </div>
            </div>
            <div className="mt-9 flex justify-center gap-10">
                <Link to={'/'}>
                    <button className="border border-orange-800 w-[100px] h-[40px] rounded-lg text-red-700 font-bold">
                        Hủy bỏ
                    </button>
                </Link>
                <button className='bg-[#58ACDD] w-[100px] h-[40px] rounded-lg text-white font-bold"'>Lưu</button>
            </div>
        </div>
    );
}

export default InforMedical;
