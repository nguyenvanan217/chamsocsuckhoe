import React from 'react';
import logo from '../../assets/img/logo1.png';
import img1 from '../../assets/img/img-bt-1.png';
import img2 from '../../assets/img/img-bt-2.png';
import img3 from '../../assets/img/img-bt-3.png';
function ItemLeft() {
    return (
        <div className="w-[26%] min-h-screen px-3 py-6 overflow-hidden flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-4 mb-[100px]">
                    <img src={logo} alt="" className="h-[55px] w-auto" />
                    <h1 className="text-[18px] text-[#428BCA] font-[350]">
                        HỆ THỐNG THÔNG TIN <span className='font-[600]'>TIÊM CHỦNG QUỐC GIA</span>
                    </h1>
                </div>
                <div className="flex flex-col gap-3 mb-3">
                    <h2 className="font-[600] text-[18px] pl-2">Đăng nhập</h2>
                    <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        className="w-full px-3 py-2 outline-0 text-[15px] border border-[#ccc] rounded-[3px]"
                    />
                    <input
                        type="text"
                        placeholder="Mật khẩu"
                        className="w-full px-3 py-2 outline-0 text-[15px] border border-[#ccc] rounded-[3px]"
                    />
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <div className="flex gap-x-3 items-center ">
                        <input type="checkbox" name="" id="" className="w-4 h-4 inline-block" />
                        <span className="text-[14px]">Nhớ tài khoản</span>
                    </div>
                    <span className="text-[#428BCA] cursor-pointer text-[14px]">Quên mật khẩu ?</span>
                </div>
                <button className='w-full text-white mt-6 text-[15px] font-[500] bg-[#428BCA] px-3 py-2 rounded-[3px]'>Đăng nhập</button>
            </div>
            <div>
                <div className='text-[14px] mt-[100px]'>
                    Điện thoại hỗ trợ: <span className='font-[500]'>1800 8000 (Nhánh 4)</span>
                </div>
                <div className="flex items-center gap-3 w-1/3 my-3 ">
                    <img src={img1} alt="" className="w-[50%]  object-cover" />
                    <img src={img2} alt="" className="w-[100%]  object-cover" />
                    <img src={img3} alt="" className="w-[100%]  object-cover" />
                </div>
            </div>
        </div>
    );
}

export default ItemLeft;
