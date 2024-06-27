import React from 'react';
import Menu from '../../components/menu/Menu';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
function MedicalHistory() {
    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Lịch Sử khám Chữa Bệnh
                </h1>
            </div>
            <div className="w-[950px] mx-auto my-8">
                <div className="flex justify-between mb-3 p-[10px]">
                    <p className="text-lg flex basis-1/4">Ngày khám</p>
                    <p className="text-lg flex basis-1/4">Triệu chứng</p>
                    <p className="text-lg flex basis-1/4">Tên bệnh</p>
                    <p className="text-lg flex basis-1/4">Mũi tiêm</p>
                </div>
                <div className="flex justify-between p-[10px] mb-3 bg-[#F2F2F2] rounded-md">
                    <p className="text-lg flex basis-1/4">21/07/2023</p>
                    <p className="text-lg flex basis-1/4">Sổ mũi</p>
                    <p className="text-lg flex basis-1/4">Covid-19</p>
                    <p className="text-lg flex basis-1/4">Pfilzer</p>
                    <div className='flex'>
                        <p className="text-3xl flex ">
                            <MdOutlineTipsAndUpdates />
                        </p>
                        <p className="text-3xl flex">
                            <MdDelete />
                        </p>
                    </div>
                </div>

                <div className="flex justify-between p-[10px] bg-[#F2F2F2] rounded-md">
                    <p className="text-lg flex basis-1/4">07/06/2024</p>
                    <p className="text-lg flex basis-1/4">Sốt, ho kéo dài</p>
                    <p className="text-lg flex basis-1/4">Covid-19</p>
                    <p className="text-lg flex basis-1/4">Pfilzer</p>
                    <div className='flex'>
                        <p className="text-3xl flex ">
                            <MdOutlineTipsAndUpdates />
                        </p>
                        <p className="text-3xl flex">
                            <MdDelete />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MedicalHistory;
