import React from 'react';
import Menu from '../../components/menu/Menu';
import { Link } from 'react-router-dom';

function Vaccination() {
    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Thông Tin Cá Nhân
                </h1>
            </div>
            <div className="w-[1350px] mx-auto">
                <div className="flex justify-center gap-3 mt-4">
                    <input type="radio" name="" id="" className="cursor-pointer" />
                    <p className="text-lg">Đăng ký bản thân</p>
                    <input type="radio" name="" id="" className="cursor-pointer" />
                    <p className="text-lg">Đăng ký cho người thân</p>
                </div>
                <div className="text-2xl my-4">Thông tin người đăng ký tiêm</div>
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">
                            Họ và tên <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Ngày sinh <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="date"
                            placeholder="Ngày/Tháng/Năm"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Giới tính <span className="text-red-700">(&#42;)</span>
                        </p>
                        <div className="flex gap-3 justify-between whitespace-nowrap border border-gray-400 p-2">
                            <label htmlFor="gender">Chọn giới tính:</label>
                            <select id="gender" className="w-full">
                                <option value="" disabled selected hidden>
                                    Chọn giới tính
                                </option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <p className="mb-2">
                            Số điện thoại <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[1350px] mx-auto mt-[20px]">
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">
                            Số CMND/CCCD/HC <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            placeholder=" Số CMND/CCCD/HC"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">Số thẻ BHYT</p>
                        <input
                            type="text"
                            placeholder="Số thẻ BHYT"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Nghề nghiệp <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Nghề nghiệp"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Ngày muốn được (tiêm dự kiến) <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="date"
                            placeholder="Ngày/Tháng/Năm"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="mb-2">Địa chỉ</p>
                    <input
                        type="text"
                        placeholder="Địa chỉ"
                        className="border w-full h-9 outline-none px-2 text-[#A3AAB5]"
                    />
                </div>
            </div>
            <div className="w-[1350px] mx-auto mt-[20px]">
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">
                            Tỉnh Thành Phố <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Tỉnh Thành Phố"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Quận/Huyện <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Quận/Huyện"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>
                    <div className="w-2/4">
                        <p className="mb-2">Xã/Phường</p>
                        <input
                            type="text"
                            placeholder="Xã/Phường"
                            className="border w-full h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[1350px] mx-auto mt-[20px]">
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">Dân tộc</p>
                        <input
                            type="text"
                            placeholder="Dân tộc"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">Quốc tịch</p>
                        <input
                            type="text"
                            placeholder="Quốc tịch"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>
                    <div className="w-2/4">
                        <p className="mb-2">
                            Nhóm ưu tiên
                            <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            placeholder="Các đối tượng kahsc do Bộ Y Tế quyết định"
                            className="border w-full h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-9 flex justify-center gap-10">
                <Link to={'/'}>
                    <button className="border border-orange-800 w-[100px] h-[40px] rounded-lg text-red-700 font-bold">
                        Hủy bỏ
                    </button>
                </Link>
                <button className='bg-[#58ACDD] w-[100px] h-[40px] rounded-lg text-white font-bold"'>Tiếp Tục</button>
            </div>
        </div>
    );
}

export default Vaccination;
