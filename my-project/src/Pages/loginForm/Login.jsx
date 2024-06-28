import React from 'react';
import ItemLeft from '../../components/login-item-left/ItemLeft.jsx';
import ItemRight from '../../components/login-item-right/ItemRight.jsx';
// import Menu from '../../components/menu/Menu.jsx';
function Login() {
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
