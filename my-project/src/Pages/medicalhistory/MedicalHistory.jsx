import React, { useEffect, useState } from 'react';
import { MdOutlineTipsAndUpdates, MdDelete } from 'react-icons/md';
import Menu from '../../components/menu/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { deleteMedicalHistory, fetchMedicalHistoryByUserId } from '../../api/apiClient';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MedicalHistory() {
    const [medicalHistoryList, setMedicalHistoryList] = useState([]);
    const [medicalHistoryFilterList, setMedicalHistoryFilterList] = useState([]);
    const [open, setOpen] = useState(false);
    const [idDelete, setIdDelete] = useState();
    const [userId, setUserId] = useState();
    const navigate = useNavigate();

    // lấy id người dùng vừa đăng nhập và kiểm tra đăng nhập
    useEffect(() => {
        document.title = "Lịch sử khám bệnh - Bộ Y Tế"
        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            setUserId(JSON.parse(user_id));
        } else {
            navigate('/');
        }
    }, [navigate])

    useEffect(() => {
        const getMedicalHistory = async () => {
            if (userId) {
                try {
                    const data = await fetchMedicalHistoryByUserId(userId);
                    setMedicalHistoryList(data);
                    setMedicalHistoryFilterList(data);
                } catch (error) {
                    console.error("Failed to fetch user data", error);
                }
            }
        };
        getMedicalHistory();
    }, [userId])

    const confirmDelete = () => {
        setMedicalHistoryFilterList(prev => prev.filter(e => e.id !== idDelete))
        setMedicalHistoryList(prev => prev.filter(e => e.id !== idDelete))
        setOpen(false);
        deleteMedicalHistory(idDelete);
    };

    const handleClickOpen = (id) => {
        setIdDelete(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const hadleDateFilter = (e) => {
        const value = e.target.value;
        let filteredList;
        if (value) {
            filteredList = medicalHistoryList.filter(medicalHistory => {
                return medicalHistory.examination_date && medicalHistory.examination_date.split('T')[0] === value;
            });
        } else {
            filteredList = medicalHistoryList;
        }
        setMedicalHistoryFilterList(filteredList);
    }

    const handleSortOrderChange = (e) => {
        const order = e.target.value;

        // Tạo bản sao của danh sách trước khi sắp xếp
        const sortedList = [...medicalHistoryFilterList];

        if (order === 'asc') {
            sortedList.sort((a, b) => a.examination_cost - b.examination_cost);
        } else if (order === 'desc') {
            sortedList.sort((a, b) => b.examination_cost - a.examination_cost);
        }

        // Cập nhật danh sách đã sắp xếp
        setMedicalHistoryFilterList(sortedList);
    };

    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Lịch Sử Khám Chữa Bệnh
                </h1>
            </div>
            <Link className='w-[950px] mx-auto flex justify-end my-3' to={`/thongtinkhambenh/${0}/${true}`}>
                <button className='bg-green-500 text-white px-7 py-1 text-[17px] rounded-[3px]'>Thêm</button>
            </Link>
            <div className='w-[950px] mx-auto flex justify-between my-3 items-center'>
                <span className='text-lg border border-spacing-1 py-[7px] px-3 rounded-md'>Thống kê theo ngày khám</span>
                <input type="date" className="border-gray-300 border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-300"
                    onChange={e => hadleDateFilter(e)} />
            </div>
            <div className='w-[950px] mx-auto flex justify-between my-3 items-center'>
                <span className='text-[15px] border border-spacing-1 py-[7px] px-3 rounded-md'>Sắp xếp theo chi phí</span>
                <select
                    className='border-gray-300 border rounded-md px-2 py-1'
                    onChange={handleSortOrderChange}
                >
                    <option value="">-- lựa chọn --</option>
                    <option value="asc">Tăng dần</option>
                    <option value="desc">Giảm dần</option>
                </select>
            </div>
            <div className="w-[950px] mx-auto">
                <ul className="flex justify-between mb-3 p-[10px]">
                    <li className="text-lg flex w-[10%] h-5">STT</li>
                    <li className="text-lg flex w-[20%] h-5">Ngày khám</li>
                    <li className="text-lg flex w-[30%] h-5">Triệu chứng</li>
                    <li className="text-lg flex w-[30%] h-5">Tên bệnh</li>
                    <li className="text-lg flex w-[31%] h-5">Chi phí</li>
                </ul>
                {!medicalHistoryFilterList.length ? <div className="w-full flex justify-center" >
                    Lịch sử trống
                </div> :
                    (
                        medicalHistoryFilterList.map((item, index) => (
                            <div key={index} className="flex items-center bg-[#F2F2F2] rounded-md mb-3">
                                <Link className="flex w-full justify-between p-[10px]" to={`/thongtinkhambenh/${item.id}/${false}`} >
                                    <span className="w-[10%] text-lg">{index + 1}</span>
                                    <span className="w-[20%] text-lg">{item.examination_date && item.examination_date.split('T')[0]}</span>
                                    <span className="w-[30%] text-lg">{item.symptoms}</span>
                                    <span className="w-[30%] text-lg">{item.disease_name}</span>
                                    <span className="w-[20%] text-lg">
                                        {parseFloat(item.examination_cost).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </span>

                                </Link>
                                <div className="flex gap-5 ml-3">
                                    <Link to={`/thongtinkhambenh/${item.id}/${true}`} className="text-3xl cursor-pointer">
                                        <MdOutlineTipsAndUpdates />
                                    </Link>
                                    <div className="text-3xl cursor-pointer" onClick={() => handleClickOpen(item.id)}>
                                        <MdDelete />
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }

            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Xác nhận xóa?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn có chắc chắn muốn xóa mục này không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={confirmDelete} autoFocus>
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default MedicalHistory;
