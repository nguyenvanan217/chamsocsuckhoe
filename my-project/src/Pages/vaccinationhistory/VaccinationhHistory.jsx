import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineTipsAndUpdates, MdDelete } from 'react-icons/md';
import { VaccinationhHistoryList as initialVaccinationhHistoryList } from './VaccinationhHistoryList';
import Menu from '../../components/menu/Menu';

function VaccinationhHistory() {
    const [VaccinationhHistoryList, setVaccinationhHistoryList] = useState(initialVaccinationhHistoryList);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({});

    const handleDelete = (indexToDelete) => {
        const newList = VaccinationhHistoryList.filter((_, index) => index !== indexToDelete);
        setVaccinationhHistoryList(newList);
    };

    const toggleEdit = (index) => {
        if (editingIndex === index) {
            setEditingIndex(null);
        } else {
            setEditingIndex(index);
            setEditData(VaccinationhHistoryList[index]);
        }
    };

    const handleSave = () => {
        const updatedList = VaccinationhHistoryList.map((item, idx) =>
            idx === editingIndex ? { ...item, ...editData } : item,
        );
        setVaccinationhHistoryList(updatedList);
        setEditingIndex(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Lịch Sử Tiêm Chủng
                </h1>
            </div>
            <div className="w-[950px] mx-auto my-8">
                <ul className="flex justify-between mb-3 p-[10px]">
                    <li className="text-lg flex w-[10%] h-5">STT</li>
                    <li className="text-lg flex w-[20%] h-5">Ngày Tiêm</li>
                    <li className="text-lg flex w-[25%] h-5">Tên Vaccin</li>
                    <li className="text-lg flex w-[25%] h-5">Phòng Bệnh</li>
                    <li className="text-lg flex w-[40%] h-5">Tình Trạng Sau Tiêm</li>
                </ul>
                {VaccinationhHistoryList.map((item, index) => (
                    <div key={index} className="flex items-center bg-[#F2F2F2] rounded-md mb-3">
                        {editingIndex === index ? (
                            <form
                                className="flex w-full justify-between p-[10px]"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSave();
                                }}
                            >
                                <input
                                    name="stt"
                                    value={editData.stt}
                                    onChange={handleChange}
                                    className="w-[5%] text-lg"
                                />
                                <input
                                    name="ngaytiem"
                                    value={editData.ngaytiem}
                                    onChange={handleChange}
                                    className="w-[20%] text-lg"
                                />
                                <input
                                    name="tenvaccin"
                                    value={editData.tenvaccin}
                                    onChange={handleChange}
                                    className="w-[25%] text-lg"
                                />
                                <input
                                    name="phongbenh"
                                    value={editData.phongbenh}
                                    onChange={handleChange}
                                    className="w-[25%] text-lg"
                                />
                                <input
                                    name="tinhtrangsautiem"
                                    value={editData.tinhtrangsautiem}
                                    onChange={handleChange}
                                    className="w-[30%] text-lg"
                                />
                                <button type="submit" className="text-3xl cursor-pointer ml-3">
                                    <BsCheck />
                                </button>
                            </form>
                        ) : (
                            <ul className="flex w-full justify-between p-[10px]">
                                <li className="text-lg flex w-[10%]">{item.stt}</li>
                                <li className="text-lg flex w-[20%]">{item.ngaytiem}</li>
                                <li className="text-lg flex w-[25%]">{item.tenvaccin}</li>
                                <li className="text-lg flex w-[25%]">{item.phongbenh}</li>
                                <li className="text-lg flex w-[25%]">{item.tinhtrangsautiem}</li>
                                <div className="flex gap-5 ml-3">
                                    <li className="text-3xl cursor-pointer" onClick={() => toggleEdit(index)}>
                                        <MdOutlineTipsAndUpdates />
                                    </li>
                                    <li className="text-3xl cursor-pointer" onClick={() => handleDelete(index)}>
                                        <MdDelete />
                                    </li>
                                </div>
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VaccinationhHistory;
