import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineTipsAndUpdates, MdDelete } from 'react-icons/md';
import { MedicalHistoryList as initialMedicalHistoryList } from './MedicalHistoryList';
import Menu from '../../components/menu/Menu';

function MedicalHistory() {
    const [MedicalHistoryList, setMedicalHistoryList] = useState(initialMedicalHistoryList);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({});

    const handleDelete = (indexToDelete) => {
        const newList = MedicalHistoryList.filter((_, index) => index !== indexToDelete);
        setMedicalHistoryList(newList);
    };

    const toggleEdit = (index) => {
        if (editingIndex === index) {
            setEditingIndex(null);
        } else {
            setEditingIndex(index);
            setEditData(MedicalHistoryList[index]);
        }
    };

    const handleSave = () => {
        const updatedList = MedicalHistoryList.map((item, idx) =>
            idx === editingIndex ? { ...item, ...editData } : item,
        );
        setMedicalHistoryList(updatedList);
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
                    Lịch Sử Khám Chữa Bệnh
                </h1>
            </div>
            <div className="w-[950px] mx-auto my-8">
                <ul className="flex justify-between mb-3 p-[10px]">
                    <li className="text-lg flex w-[20%] h-5">Ngày khám</li>
                    <li className="text-lg flex w-[30%] h-5">Triệu chứng</li>
                    <li className="text-lg flex w-[30%] h-5">Tên bệnh</li>
                    <li className="text-lg flex w-[31%] h-5">Thuốc uống</li>
                </ul>
                {MedicalHistoryList.map((item, index) => (
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
                                    name="ngaykham"
                                    value={editData.ngaykham}
                                    onChange={handleChange}
                                    className="w-[20%] text-lg"
                                />
                                <input
                                    name="trieuchung"
                                    value={editData.trieuchung}
                                    onChange={handleChange}
                                    className="w-[30%] text-lg"
                                />
                                <input
                                    name="tenbenh"
                                    value={editData.tenbenh}
                                    onChange={handleChange}
                                    className="w-[30%] text-lg"
                                />
                                <input
                                    name="muitiem"
                                    value={editData.muitiem}
                                    onChange={handleChange}
                                    className="w-[20%] text-lg"
                                />
                                <button type="submit" className="text-3xl cursor-pointer ml-3">
                                    <BsCheck />
                                </button>
                            </form>
                        ) : (
                            <ul className="flex w-full justify-between p-[10px]">
                                <li className="text-lg flex w-[20%]">{item.ngaykham}</li>
                                <li className="text-lg flex w-[30%]">{item.trieuchung}</li>
                                <li className="text-lg flex w-[30%]">{item.tenbenh}</li>
                                <li className="text-lg flex w-[20%]">{item.thuocuong}</li>
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

export default MedicalHistory;
