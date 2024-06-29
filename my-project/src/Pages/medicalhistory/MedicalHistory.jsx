import React, { useEffect, useState } from 'react';
import { MdOutlineTipsAndUpdates, MdDelete } from 'react-icons/md';
import Menu from '../../components/menu/Menu';
import { useNavigate } from 'react-router-dom';
import { deleteMedicalHistory, fetchMedicalHistoryByUserId } from '../../api/apiClient';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MedicalHistory() {
    const [medicalHistoryList, setMedicalHistoryList] = useState([]);
    const [open, setOpen] = useState(false);
    const [idDelete, setIdDelete] = useState();
    const [userId, setUserId] = useState();
    const navigate = useNavigate();

    // lấy id người dùng vừa đăng nhập và kiểm tra đăng nhập
    useEffect(() => {
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
                } catch (error) {
                    console.error("Failed to fetch user data", error);
                }
            }
        };
        getMedicalHistory();
    }, [userId])

    const confirmDelete = () => {
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

    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Lịch Sử Khám Chữa Bệnh
                </h1>
            </div>
            <div className='w-[950px] mx-auto flex justify-end my-3'>
                <button className='bg-green-500 text-white px-7 py-1 text-[17px] rounded-[3px]'>Thêm</button>
            </div>
            <div className="w-[950px] mx-auto">
                <ul className="flex justify-between mb-3 p-[10px]">
                    <li className="text-lg flex w-[10%] h-5">STT</li>
                    <li className="text-lg flex w-[20%] h-5">Ngày khám</li>
                    <li className="text-lg flex w-[30%] h-5">Triệu chứng</li>
                    <li className="text-lg flex w-[30%] h-5">Tên bệnh</li>
                    <li className="text-lg flex w-[31%] h-5">Thuốc uống</li>
                </ul>
                {medicalHistoryList.map((item, index) => (
                    <div key={index} className="flex items-center bg-[#F2F2F2] rounded-md mb-3">
                        <form className="flex w-full justify-between p-[10px]">
                            <span className="w-[10%] text-lg">{index + 1}</span>
                            <span className="w-[20%] text-lg">{item.examination_date.split('T')[0]}</span>
                            <span className="w-[30%] text-lg">{item.symptoms}</span>
                            <span className="w-[30%] text-lg">{item.disease_name}</span>
                            <span className="w-[20%] text-lg">{item.main_medication}</span>
                        </form>
                        <div className="flex gap-5 ml-3">
                            <div className="text-3xl cursor-pointer" >
                                <MdOutlineTipsAndUpdates />
                            </div>
                            <div className="text-3xl cursor-pointer" onClick={() => handleClickOpen(item.id)}>
                                <MdDelete />
                            </div>
                        </div>
                    </div>
                ))}
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
