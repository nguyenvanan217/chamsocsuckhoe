import React, { useEffect, useState } from 'react';
import { MdOutlineTipsAndUpdates, MdDelete } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteVaccinationHistory, fetchVaccinationHistoryByUserId } from '../../api/apiClient';

function VaccinationhHistory() {
    const [vaccinationhHistoryList, setVaccinationhHistoryList] = useState([]);
    const [vaccinationhHistoryFilterList, setVaccinationhHistoryFilterList] = useState([]);
    const [open, setOpen] = useState(false);
    const [idDelete, setIdDelete] = useState();
    const [userId, setUserId] = useState();
    const navigate = useNavigate();

    // lấy id người dùng vừa đăng nhập và kiểm tra đăng nhập
    useEffect(() => {
        document.title = "Lịch sử tiêm phòng - Bộ Y Tế"
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
                    const data = await fetchVaccinationHistoryByUserId(userId);
                    setVaccinationhHistoryList(data);
                    setVaccinationhHistoryFilterList(data);
                } catch (error) {
                    console.error("Failed to fetch user data", error);
                }
            }
        };
        getMedicalHistory();
    }, [userId])


    const confirmDelete = () => {
        setVaccinationhHistoryFilterList(prev => prev.filter(e => e.id !== idDelete))
        setVaccinationhHistoryList(prev => prev.filter(e => e.id !== idDelete))
        setOpen(false);
        deleteVaccinationHistory(idDelete);// chạy api xoá dữ liệu qua id
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
            filteredList = vaccinationhHistoryList.filter(vaccinationHistory => {
                return vaccinationHistory.vaccination_dates && vaccinationHistory.vaccination_dates.split('T')[0] === value;
            });
        } else {
            filteredList = vaccinationhHistoryList;
        }
        setVaccinationhHistoryFilterList(filteredList);
    }

    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Lịch Sử Tiêm Chủng
                </h1>
            </div>
            <div className='w-[950px] mx-auto flex justify-end my-3'>
                <Link to={`/thongtintiemphong/${0}/${true}`} className='bg-green-500 text-white px-7 py-1 text-[17px] rounded-[3px]'>Thêm</Link>
            </div>
            <div className='w-[950px] mx-auto flex justify-between my-3 items-center'>
                <span className='text-lg border border-spacing-1 py-[7px] px-3 rounded-md'>Thống kê theo ngày tiêm</span>
                <input type="date" className="border-gray-300 border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-300"
                    onChange={e => hadleDateFilter(e)} />
            </div>
            <div className="w-[950px] mx-auto">
                <ul className="flex justify-between mb-3 p-[10px]">
                    <li className="text-lg flex w-[10%] h-5">STT</li>
                    <li className="text-lg flex w-[20%] h-5">Ngày Tiêm</li>
                    <li className="text-lg flex w-[25%] h-5">Tên Vaccin</li>
                    <li className="text-lg flex w-[25%] h-5">Phòng Bệnh</li>
                    <li className="text-lg flex w-[40%] h-5">Tình Trạng Sau Tiêm</li>
                </ul>
                {!vaccinationhHistoryFilterList.length ?
                    <div className="w-full flex justify-center" >
                        Lịch sử trống
                    </div>
                    : (
                        vaccinationhHistoryFilterList.map((item, index) => (
                            <div key={index} className="flex items-center bg-[#F2F2F2] rounded-md mb-3">
                                <Link to={`/thongtintiemphong/${item.id}/${false}`} className="flex w-full justify-between p-[10px]">
                                    <span className="w-[10%] text-lg">{index + 1}</span>
                                    <span className="w-[20%] text-lg">{item.vaccination_dates && item.vaccination_dates.split('T')[0]}</span>
                                    <span className="w-[25%] text-lg">{item.vaccination_names}</span>
                                    <span className="w-[25%] text-lg">{item.vaccination_rooms}</span>
                                    <span className="w-[30%] text-lg">{item.post_vaccination_status}</span>
                                </Link>
                                <div className="flex gap-5 ml-3">
                                    <Link to={`/thongtintiemphong/${item.id}/${true}`} className="text-3xl cursor-pointer" >
                                        <MdOutlineTipsAndUpdates />
                                    </Link>
                                    <div className="text-3xl cursor-pointer" onClick={() => handleClickOpen(item.id)}>
                                        <MdDelete />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

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
        </div>
    );
}

export default VaccinationhHistory;
