import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo1.png';
import img1 from '../../assets/img/img-bt-1.png';
import img2 from '../../assets/img/img-bt-2.png';
import img3 from '../../assets/img/img-bt-3.png';
import { addUser, fetchUserDatas } from '../../api/apiClient';
import { Link, useNavigate } from 'react-router-dom';
function RegisterItemLeft() {
    const [userDatas, setUserDatas] = useState(null);
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isUserNameExists, setIsUserNameExists] = useState(false);
    const [isPhoneExists, setIsPhoneExists] = useState(false);
    const [isEmailExists, setIsEmailExists] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const [isNull, setIsNull] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getUserDatas = async () => {
            try {
                const data = await fetchUserDatas();
                setUserDatas(data);
            } catch (error) {
                console.error("Failed to fetch user data", error);
            }
        }
        getUserDatas();
    }, []);

    const checkRegister = () => {
        let registerSuccessful = false;
        let isNull = userName === "" || phone === "" || email === "" || password === "" || confirmPassword === "";
        setIsNull(isNull);

        if (isNull) {
            return; // Nếu có trường rỗng thì không tiếp tục
        }

        let userNameExists = false;
        let phoneExists = false;
        let emailExists = false;

        // Kiểm tra sự tồn tại của userName, phone, email
        for (let i = 0; i < userDatas.length; i++) {
            if (userDatas[i].name === userName) {
                userNameExists = true;
            }
            if (userDatas[i].phone === phone) {
                phoneExists = true;
            }
            if (userDatas[i].email === email) {
                emailExists = true;
            }
        }

        // Đặt các state sau khi vòng lặp kết thúc
        setIsUserNameExists(userNameExists);
        setIsPhoneExists(phoneExists);
        setIsEmailExists(emailExists);

        if (userNameExists || phoneExists || emailExists) {
            console.log("Register failed");
            registerSuccessful = true;
        }
        if (password !== confirmPassword) {
            setIsConfirmPassword(true);
        } else {
            setIsConfirmPassword(false);
        }

        if (!registerSuccessful && !isNull && password === confirmPassword) {
            addUser({
                "name": userName,
                "phone": phone,
                "email": email,
                "password": password
            }).then(() => {
                // Đăng ký thành công, thực hiện các hành động cần thiết
                navigate('/'); // Chuyển tới trang phù hợp khi đăng ký thành công
                console.log("Register successful");
            }).catch(error => {
                console.error("Failed to add user:", error);
                // Xử lý lỗi khi thêm người dùng không thành công
            });
        }
    }

    return (
        <div className="w-[26%] min-h-screen px-3 py-6 overflow-hidden flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-4 mb-[45px]">
                    <img src={logo} alt="" className="h-[55px] w-auto" />
                    <h1 className="text-[18px] text-[#428BCA] font-[350]">
                        HỆ THỐNG THÔNG TIN <span className='font-[600]'>TIÊM CHỦNG QUỐC GIA</span>
                    </h1>
                </div>
                <div className="flex flex-col gap-3 mb-3">
                    <h2 className="font-[600] text-[18px] pl-2">Đăng Ký</h2>
                    <div>
                        <input
                            type="text"
                            placeholder="Tên đăng ký"
                            className="w-full px-3 py-2 outline-0 text-[15px] border border-[#ccc] rounded-[3px]"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                        {isUserNameExists && !isNull ? <span className='text-[12px] text-[red]'>Tên đăng kí đã tồn tại.</span> : null}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Nhập số điện thoại"
                            className="w-full px-3 py-2 outline-0 text-[15px] border border-[#ccc] rounded-[3px]"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        {isPhoneExists && !isNull ? <span className='text-[12px] text-[red]'>Số điện thoại đã tồn tại.</span> : null}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            className="w-full px-3 py-2 outline-0 text-[15px] border border-[#ccc] rounded-[3px]"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {isEmailExists && !isNull ? <span className='text-[12px] text-[red]'>Email đã tồn tại.</span> : null}
                    </div>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className="w-full px-3 py-2 outline-0 text-[15px] border border-[#ccc] rounded-[3px]"
                        value={password}
                        onChange={e => setPassowrd(e.target.value)}
                    />
                    <div>
                        <input
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            className="w-full px-3 py-2 outline-0 text-[15px] border border-[#ccc] rounded-[3px]"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        {isConfirmPassword && !isNull ? <span className='text-[12px] text-[red]'>Nhập lại mật khẩu không khớp</span> : null}
                        {isNull ? <span className='text-[12px] text-[red]'> Vui lòng điền đầy đủ các trường.</span> : null}
                    </div>
                </div>
                <button className='w-full text-white mt-1 text-[15px] font-[500] bg-[#428BCA] px-3 py-2 rounded-[3px]' onClick={() => checkRegister()}>Đăng Ký</button>
                <div>
                    <h1 className='mt-[20px] text-[15px]'>Bạn đã có tài khoản? <Link to={"/"}><span className='text-[#428BCA]'>Hãy đăng nhập</span></Link></h1>
                </div>
            </div>
            <div>
                <div className='text-[14px] mt-[100px]'>
                    Điện thoại hỗ trợ: <span className='font-[500]'>1800 8000 (Nhánh 4)</span>
                </div>
                <div className="flex items-center gap-3 w-1/3 my-3 ">
                    <img src={img1} alt="" className="w-[50%]  object-cover" />
                    <img src={img2} alt="" className="w-[100%]  object-cover" />
                    <img src={img3} alt="" className="w-[100%]  object-cover" />
                </div>
            </div>
        </div>
    );
}

export default RegisterItemLeft;
