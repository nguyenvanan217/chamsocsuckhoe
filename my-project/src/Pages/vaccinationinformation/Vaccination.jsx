import React from 'react';
import Menu from '../../components/menu/Menu';

function Vaccination() {
    return (
        <div>
            <Menu />
            <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                Thông Tin Tiêm Phòng
            </h1>
            <div className="w-[1350px] flex justify-end">
                <button className='bg-green-500 px-2 w-[270px] h-[55px] rounded-lg text-white font-bold mt-4 block text-center text-bold"'>
                    Lịch Sử Tiêm Phòng
                </button>
            </div>
            <div className="w-[1050px] bg-[#38BDF8] rounded-lg mt-14 p-14 flex flex-col gap-10 justify-center items-center mx-auto">
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Ngày dự định</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Tên Vắc-xin</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Phòng Bệnh</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Tình Trạng Sau Tiêm</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2 font-bold">Chi Phí Tiêm Phòng</p>
                    <input type="text" className="w-[141px] h-[37px] outline-none px-2 text-black bg-red-400 placeholder-black" placeholder='VNĐ' />
                </div>

            </div>
            <div className="mt-9 flex justify-center gap-10">
                <button className="border border-orange-800 w-[100px] h-[40px] rounded-lg text-red-700 font-bold">
                    Chỉnh sửa
                </button>
                <button className='bg-[#58ACDD] w-[100px] h-[40px] rounded-lg text-white font-bold"'>Lưu</button>
            </div>
        </div>
    );
}

export default Vaccination;
