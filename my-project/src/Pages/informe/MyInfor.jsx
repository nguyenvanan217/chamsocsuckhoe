import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { addDays } from 'date-fns';
import { fetchUserProfilesByUserId, updateUserProfiles } from '../../api/apiClient';
import { useNavigate } from 'react-router-dom';

function MyInfor() {
    const [isChangeInfo, setIsChangeInfo] = useState(false);
    const [userProfilesData, setUserProfilesData] = useState(null);
    const [userId, setUserId] = useState();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cccd, setCccd] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    // lấy id người dùng vừa đăng nhập và kiểm tra đăng nhập
    useEffect(() => {
        document.title = "Thông tin người dùng - Bộ Y Tế"
        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            setUserId(JSON.parse(user_id));
        } else {
            navigate('/');
        }
    }, [navigate])

    useEffect(() => {
        const getInfo = async () => {
            try {
                const data = await fetchUserProfilesByUserId(userId);
                const profileData = data[0];
                setUserProfilesData(profileData);
                setName(profileData.name ? profileData.name : "");
                setGender(profileData.gender ? profileData.gender : "");
                setBirthDate(profileData.birth_date ? profileData.birth_date.split('T')[0] : "");
                setCccd(profileData.cccd ? profileData.cccd : "");
                setBirthPlace(profileData.birth_place ? profileData.birth_place : "");
                setAddress(profileData.address ? profileData.address : "");
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        getInfo();
    }, [userId, isChangeInfo])

    const handelAccount = () => {
        setIsChangeInfo(!isChangeInfo)
        if (isChangeInfo) {
            console.log(isChangeInfo);
            setName(userProfilesData.name ? userProfilesData.name : "");
            setGender(userProfilesData.gender ? userProfilesData.gender : "");
            setBirthDate(userProfilesData.birth_date ? userProfilesData.birth_date : "");
            setCccd(userProfilesData.cccd ? userProfilesData.cccd : "");
            setBirthPlace(userProfilesData.birth_place ? userProfilesData.birth_place : "");
            setAddress(userProfilesData.address ? userProfilesData.address : "");
        }
    }
    const handelSubmit = () => {
        updateUserProfiles(userProfilesData.id, {
            name,
            gender,
            "birth_date": addDays(birthDate, 1),
            cccd,
            "birth_place": birthPlace,
            address
        }).then(() => {
            setIsChangeInfo(!isChangeInfo)
            console.log("successful");
        }).catch(error => {
            console.error("error", error);
        })
    }

    return (
        <div>
            <Menu />
            <div>
                <h1 className="w-full bg-[#DDEDFD] text-[#152f96] font-semibold text-center p-3 text-xl">
                    Thông Tin Cá Nhân
                </h1>
            </div>
            <div className="my-7 w-[1050px] mx-auto bg-[#38BDF8] p-6 rounded-lg">
                <div className="flex justify-around items-center mb-4 py-3 ">
                    <p className='text-lg basis-1/5'>Họ và tên</p>
                    <input type="text" className='bg-white flex basis-4/5 h-[40px] outline-none text-xl px-1' onChange={e => setName(e.target.value)} value={name} disabled={isChangeInfo ? false : true} />
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Giới tính</p>
                    <input type="text" className='bg-white flex basis-4/5 h-[40px] outline-none text-xl px-1' onChange={e => setGender(e.target.value)} value={gender} disabled={isChangeInfo ? false : true} />
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Ngày Sinh</p>
                    <input type="date" className='bg-white flex basis-4/5 h-[40px] outline-none text-xl px-1' onChange={e => setBirthDate(e.target.value)} value={birthDate} disabled={isChangeInfo ? false : true} />
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Căn Cước CD (Nếu có)</p>
                    <input type="text" className='bg-white flex basis-4/5 h-[40px] outline-none text-xl px-1' onChange={e => setCccd(e.target.value)} value={cccd} disabled={isChangeInfo ? false : true} />
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Nơi sinh</p>
                    <input type="text" className='bg-white flex basis-4/5 h-[40px] outline-none text-xl px-1' onChange={e => setBirthPlace(e.target.value)} value={birthPlace} disabled={isChangeInfo ? false : true} />
                </div>
                <div className="flex justify-around items-center mb-7">
                    <p className='text-lg basis-1/5'>Địa chỉ thường trú</p>
                    <input type="text" className='bg-white flex basis-4/5 h-[40px] outline-none text-xl px-1' onChange={e => setAddress(e.target.value)} value={address} disabled={isChangeInfo ? false : true} />
                </div>
                <div className='flex justify-center gap-6'>
                    <button className="w-36 h-10 rounded-md text-base text-white bg-red-500" onClick={() => handelAccount()}>{!isChangeInfo ? "Chỉnh sửa" : "Huỷ"}</button>
                    {isChangeInfo && <button className="w-36 h-10 rounded-md text-base text-white bg-[#238805]" onClick={() => handelSubmit()}>Lưu</button>}
                </div>
            </div>
        </div>
    );
}

export default MyInfor;
