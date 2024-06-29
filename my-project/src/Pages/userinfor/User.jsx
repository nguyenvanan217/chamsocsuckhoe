import React from 'react';
import Menu from '../../components/menu/Menu';

function User() {
    return (
        <div>
            <Menu />
            <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                Thông Tin Tài Khoản
            </h1>
            <div className="w-[1050px] bg-[#38BDF8] rounded-lg mt-14 p-14 flex flex-col gap-10 justify-center items-center mx-auto">
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Tên Tài Khoản</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Địa chỉ Email</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Mật Khẩu</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
                </div>
                <div className="flex w-full gap-16 items-center">
                    <p className="text-lg w-1/3">Đổi Mật Khẩu</p>
                    <input type="text" className="border w-2/3 h-9 outline-none px-2 text-black bg-[#e2e4e5]" />
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

export default User;
