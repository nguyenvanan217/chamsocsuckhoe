import React from 'react';
import logo from '../../assets/img/logo1.png';
import img1 from '../../assets/img/img-bt-1.png';
import img2 from '../../assets/img/img-bt-2.png';
import img3 from '../../assets/img/img-bt-3.png';
function ItemLeft() {
    return (
        <div className="w-1/4 min-h-screen px-4 py-8 bg-yellow-300 overflow-hidden">
            <div className="flex items-center gap-4 mb-28">
                <img src={logo} alt="" className="h-[80px] w-auto" />
                <h1 className="text-2xl text-[#428BCA]">
                    HỆ THỐNG THÔNG TIN <strong>TIÊM CHỦNG QUỐC GIA</strong>
                </h1>
            </div>
            <div className="flex flex-col gap-6 mb-5">
                <h2 className="font-bold text-xl">Đăng Nhập</h2>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    className="w-full p-3 outline-0 text-base border border-gray-400"
                />
                <input
                    type="text"
                    placeholder="Mật khẩu"
                    className="w-full p-3 outline-0 text-base border border-gray-400"
                />
            </div>
            <div className="flex justify-between items-center gap-x-4">
                <div className="flex gap-x-3 items-center ">
                    <input type="checkbox" name="" id="" className="w-4 h-4 inline-block" />
                    <span className="text-lg">Nhớ tài khoản</span>
                </div>
                <span className="text-[#428BCA] underline cursor-pointer">Quên mật khẩu ?</span>
            </div>
            <div className="bg-[#428BCA] text-xl text-white flex justify-center h-14 w-full mt-6 mb-20">
                <button>Đăng nhập</button>
            </div>
            <h3>
                Điện thoại hỗ trợ: <strong>1800 8000 (Nhánh 4)</strong>
            </h3>
            <div className="flex items-center gap-3 w-full my-8">
                <img src={img1} alt="" className="w-[153px] h-[80px] object-cover" />
                <img src={img2} alt="" className="w-[153px] h-[70px] object-cover" />
                <img src={img3} alt="" className="w-[153px] h-[70px] object-cover" />
            </div>
        </div>
    );
}

export default ItemLeft;
