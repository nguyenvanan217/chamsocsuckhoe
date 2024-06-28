import React from 'react';
import Menu from '../../components/menu/Menu';

function ChildrenPerDisInfor() {
    return (
        <div>
            <Menu />
            <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                Thông Tin Khám Định Kỳ Trẻ Em
            </h1>
            <div className="w-[1350px] flex justify-end">
                <button className='bg-green-500 px-2 w-[270px] h-[55px] rounded-lg text-white font-bold mt-4 block text-center text-bold"'>
                    Lịch Sử Khám Định Kỳ Trẻ Em
                </button>
            </div>
            <div className="w-[1050px] bg-[#38BDF8] rounded-lg mt-14 p-14 flex flex-col gap-10 justify-center items-center mx-auto">
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Họ Tên Trẻ Em</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Giới tính</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Ngày sinh</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Ngày khám định kỳ</p>
                    <input type="date" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Chiều cao (cm)</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Cân nặng (kg)</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/2">Mô tả tình trạng</p>
                    <input type="text" className="border w-1/2 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
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

export default ChildrenPerDisInfor;
