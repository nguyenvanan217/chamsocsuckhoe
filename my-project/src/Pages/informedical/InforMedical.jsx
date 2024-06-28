import React from 'react';
import Menu from '../../components/menu/Menu';
import { Link } from 'react-router-dom';

function InforMedical() {
    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Điền Thông Tin Khám Chữa Bệnh
                </h1>
            </div>
            <div className="w-[1350px] mx-auto">
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
                <p>1/ Khám lâm sàn</p>
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
                        <input type="text" className="border w-28 h-9 outline-none px-2  bg-[#E8ECEF] text-black" />
                    </div>
                </div>
            </div>

            <div className="w-[1350px] mx-auto mt-[20px]">
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">
                            Số CMND/CCCD/HC <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">Số thẻ BHYT</p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">
                            Nghề nghiệp <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">
                            Ngày muốn được (tiêm dự kiến) <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="date" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
                </div>
                <div className="w-full">
                    <p className="mb-2">Địa chỉ</p>
                    <input type="text" className="border w-full h-9 outline-none px-2 text-[#A3AAB5]" />
                </div>
            </div>
            <div className="w-[1350px] mx-auto mt-[20px]">
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">
                            Tỉnh Thành Phố <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">
                            Quận/Huyện <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
                    <div className="w-2/4">
                        <p className="mb-2">Xã/Phường</p>
                        <input type="text" className="border w-full h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
                </div>
            </div>

            <div className="w-[1350px] mx-auto mt-[20px]">
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">Dân tộc</p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>

                    <div>
                        <p className="mb-2">Quốc tịch</p>
                        <input type="text" className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
                    <div className="w-2/4">
                        <p className="mb-2">
                            Nhóm ưu tiên
                            <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input type="text" className="border w-full h-9 outline-none px-2 text-[#A3AAB5]" />
                    </div>
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
