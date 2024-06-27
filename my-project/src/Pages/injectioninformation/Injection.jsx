import React from 'react';
import Menu from '../../components/menu/Menu';

function Injection() {
    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Thông Tin Vaccine
                </h1>
            </div>
            <div className="max-w-[1350px] mx-auto">
                <div className="text-2xl my-4">Thông tin mũi tiêm 1</div>
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">
                            Loại vắc xin <span className="text-red-700">(&#42;)</span>
                        </p>
                        <div className="flex gap-3 justify-between whitespace-nowrap border border-gray-400 p-2 mb-5">
                            <label className="outline-none" htmlFor="gender">
                                Chọn vắc xin:
                            </label>
                            <select id="gender" className="w-full">
                                <option value="" disabled selected hidden>
                                    Chọn vắc xin
                                </option>
                                <option value="">Vaccine AstraZeneca</option>
                                <option value="">Gam-COVID-Vac </option>
                                <option value="">Vero Cell</option>
                                <option value="">Comirnaty</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2">Số lô</p>
                        <input
                            type="date"
                            placeholder="Số lô"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Ngày Tiêm <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="date"
                            placeholder="Ngày/Tháng/Năm"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="mb-2">
                        Địa điểm tiêm <span className="text-red-700">(&#42;)</span>
                    </p>
                    <input
                        type="text"
                        placeholder="Chọn địa điểm tiêm"
                        className="w-10/12 border h-9 outline-none px-2 text-[#A3AAB5] bg-[#E8ECEF]"
                    />
                    <button className="bg-[#0C1A8D] rounded-md w-1/12 mx-3 py-2 text-white">Chọn</button>
                </div>

                <div className="w-full">
                    <p className="mb-2">
                        Địa điểm khác <span className="text-red-700">(&#42;)</span>
                    </p>
                    <input
                        type="text"
                        placeholder="Nhập địa điểm khác"
                        className="w-[92.5%] border h-9 outline-none px-2 text-[#A3AAB5] bg-[#E8ECEF]"
                    />
                </div>

                <div>
                    <p className="mb-2 mt-5">
                        Đính kèm thông tin tiêm chủng <span className="text-red-700">(&#42;)</span>
                    </p>
                    <span className="text-red-700">Đính kèm tối đa 2 file</span>
                </div>

                <div className="my-9 w-[80%] h-64 flex flex-col gap-6 justify-center items-center border-dotted mx-auto bg-[#E8ECEF]">
                    <input type="file" name="" id="" />
                    <h1 className="font-bold">KÉO THẢ ẢNH HOẶC CHỌN FILE ĐỂ TẢI LÊN</h1>
                    <p className="text-[#A3AAB5]">Chỉ cho phép file dạng png, jpeg, pdf và dung lượng không quá 10MB</p>
                </div>
            </div>
        </div>
    );
}

export default Injection;
