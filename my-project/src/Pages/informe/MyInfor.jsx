import React from 'react';
import Menu from '../../components/menu/Menu';

function MyInfor() {
    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Thông Tin Cá Nhân
                </h1>
            </div>
            <div className="my-7 w-[1050px] mx-auto bg-[#38BDF8] p-6 rounded-lg">
                <div className="flex justify-around items-center mb-4 py-3">
                    <p className='text-lg basis-1/5'>Họ và tên</p>
                    <input type="text" className='flex basis-4/5 h-[40px] outline-none text-xl px-1'/>
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Giới tính</p>
                    <input type="text" className='flex basis-4/5 h-[40px] outline-none text-xl px-1'/>
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Ngày Sinh</p>
                    <input type="text" className='flex basis-4/5 h-[40px] outline-none text-xl px-1'/>
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Căn Cước CD (Nếu có)</p>
                    <input type="text" className='flex basis-4/5 h-[40px] outline-none text-xl px-1'/>
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Nơi sinh</p>
                    <input type="text" className='flex basis-4/5 h-[40px] outline-none text-xl px-1'/>
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Địa chỉ thường trú</p>
                    <input type="text" className='flex basis-4/5 h-[40px] outline-none text-xl px-1'/>
                </div>
                <div className='flex justify-center gap-6'>
                    <button className="w-36 h-10 rounded-md text-base text-white bg-red-500 ">Chỉnh sửa</button>
                    <button className="w-36 h-10 rounded-md text-base text-white bg-[#238805]">Lưu</button>
                </div>
            </div>
        </div>
    );
}

export default MyInfor;
