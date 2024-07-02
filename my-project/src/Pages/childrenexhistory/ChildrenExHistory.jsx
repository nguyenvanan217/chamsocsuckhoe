import React, { useEffect, useState } from 'react';
import { MdOutlineTipsAndUpdates, MdDelete } from 'react-icons/md';
import Menu from '../../components/menu/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { deleteChildCheckupHistory, fetchChildCheckupHistoryByUserId } from '../../api/apiClient';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function ChildrenExHistory() {
  const [childCheckupHistoryData, setChildCheckupHistoryData] = useState([]);
  const [childCheckupHistoryFilterData, setChildCheckupHistoryFilterData] = useState([]);
  const [open, setOpen] = useState(false);
  const [idDelete, setIdDelete] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  // lấy id người dùng vừa đăng nhập và kiểm tra đăng nhập
  useEffect(() => {
    document.title = "Lịch sử khám trẻ em - Bộ Y Tế"
    const user_id = localStorage.getItem('user_id');
    if (user_id) {
      setUserId(JSON.parse(user_id));
    } else {
      navigate('/');
    }
  }, [navigate])

  useEffect(() => {
    const getChildCheckupHistory = async () => {
      if (userId) {
        try {
          const data = await fetchChildCheckupHistoryByUserId(userId);
          setChildCheckupHistoryData(data);
          setChildCheckupHistoryFilterData(data);
        } catch (error) {
          console.error("Failed to fetch child chelup history data", error);
        }
      }
    };
    getChildCheckupHistory();
  }, [userId])

  const confirmDelete = () => {
    setChildCheckupHistoryFilterData(prev => prev.filter(e => e.id !== idDelete))
    setChildCheckupHistoryData(prev => prev.filter(e => e.id !== idDelete))
    setOpen(false);
    deleteChildCheckupHistory(idDelete);
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
      filteredList = childCheckupHistoryData.filter(childCheckupHistory => {
        return childCheckupHistory.regular_check_up_date && childCheckupHistory.regular_check_up_date.split('T')[0] === value;
      });
    } else {
      filteredList = childCheckupHistoryData;
    }
    setChildCheckupHistoryFilterData(filteredList);
  }

  return (
    <div>
      <Menu />
      <div>
        <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
          Lịch Sử Khám Chữa Bệnh
        </h1>
      </div>
      <Link className='w-[950px] mx-auto flex justify-end my-3' to={`/thongtinkhamdinhkytreem/${0}/${true}`}>
        <button className='bg-green-500 text-white px-7 py-1 text-[17px] rounded-[3px]'>Thêm</button>
      </Link>
      <div className='w-[950px] mx-auto flex justify-between my-3 items-center'>
        <span className='text-lg border border-spacing-1 py-[7px] px-3 rounded-md'>Thống kê theo ngày khám định kỳ</span>
        <input type="date" className="border-gray-300 border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-300"
          onChange={e => hadleDateFilter(e)} />
      </div>
      <div className="w-[950px] mx-auto">
        <ul className="flex mb-3 p-[10px]">
          <li className="text-lg w-[10%]">STT</li>
          <li className="text-lg w-[25%]">Tên</li>
          <li className="text-lg w-[20%]">Giới tính</li>
          <li className="text-lg w-[25%]">Ngày sinh</li>
          <li className="text-lg w-[25%]">Ngày khám định kỳ</li>
          <li className="text-lg w-[15%]"></li>
        </ul>

        {!childCheckupHistoryFilterData.length ? (
          <div className="w-full flex justify-center">
            Lịch sử trống
          </div>
        ) : (
          childCheckupHistoryFilterData.map((item, index) => (
            <div key={index} className="flex items-center bg-[#F2F2F2] rounded-md mb-3">
              <Link className="flex w-full justify-between p-[10px]" to={`/thongtinkhamdinhkytreem/${item.id}/${false}`}>
                <span className="w-[8%] text-lg">{index + 1}</span>
                <span className="w-[25%] text-lg">{item.name}</span>
                <span className="w-[20%] text-lg">{item.gender}</span>
                <span className="w-[25%] text-lg">{item.birth_date && item.birth_date.split('T')[0]}</span>
                <span className="w-[25%] text-lg">{item.regular_check_up_date && item.regular_check_up_date.split('T')[0]}</span>
              </Link>
              <div className="flex gap-5 ml-3">
                <Link to={`/thongtinkhamdinhkytreem/${item.id}/${true}`} className="text-3xl cursor-pointer">
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
export default ChildrenExHistory

