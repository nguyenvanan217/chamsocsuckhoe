import React from 'react';
import { MenuList } from './MenuList';
import logo from '../../assets/img/logo1.png';
import { Link, NavLink } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa6';
function Menu() {

    //xoá user_id khỏi localStorage khi logout
    const handelLogOut = () => {
        localStorage.removeItem('user_id');
    }

    return (
        <div className='w-4/4 flex items-center justify-between px-10 py-2 bg-sky-400'>
            <Link to={"/thongtinnguoidung"}><img src={logo} alt="Logo" className='h-[50px]' /></Link>
            <ul className='flex justify-between gap-6 w-4/4'>
                {MenuList.map((item, index) => {
                    return (
                        <li key={index} className='text-sm whitespace-nowrap'>
                            <NavLink to={item.url} className={item.cName}>
                                <div className='flex items-center gap-1 text-[16px]'>
                                    {item.title} {item.icon && item.icon}
                                </div>
                            </NavLink>
                        </li>
                    );
                })}
                <li className='text-base'>
                    <NavLink to={"/"} onClick={() => handelLogOut()}>
                        <div className='flex items-center gap-1'>
                            Đăng xuất
                            <FaPowerOff />
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Menu;
