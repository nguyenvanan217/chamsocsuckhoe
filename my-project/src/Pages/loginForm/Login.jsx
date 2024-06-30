import React, { useEffect } from 'react';
import ItemLeft from '../../components/login-item-left/ItemLeft.jsx';
import ItemRight from '../../components/login-item-right/ItemRight.jsx';
// import Menu from '../../components/menu/Menu.jsx';
function Login() {
    useEffect(() => {
        document.title = "Đăng nhập - Bộ Y Tế"
    }, [])
    return (
        <>
            <div className="flex">
                <ItemLeft />
                <ItemRight />
            </div>
        </>
    );
}

export default Login;
