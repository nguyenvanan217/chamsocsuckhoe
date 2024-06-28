import React from 'react';
import { MenuList } from './MenuList';
import logo from '../../assets/img/logo1.png';
import { Link, NavLink } from 'react-router-dom';
function Menu() {
    return (
        <div className='w-4/4 flex items-center justify-between px-10 py-4 bg-sky-400'>
            <Link to={"/thongtintiemchung"}><img src={logo} alt="Logo" className='h-[80px]'/></Link> 
            <ul className='flex justify-between gap-6 w-4/4'>
                {MenuList.map((item, index) => {
                    return (
                        <li key={index} className='text-base'>
                            <NavLink to={item.url} className={item.cName}>
                                <div className='flex items-center gap-1'>
                                {item.title} {item.icon && item.icon}
                                </div>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Menu;
