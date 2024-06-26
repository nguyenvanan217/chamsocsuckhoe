import React from 'react';
import ItemLeft from '../../components/login-item-left/ItemLeft'; 
import ItemRight from '../../components/login-item-right/ItemRight';
function Login() {
  return (
    <div className='flex'>
      <ItemLeft />
      <ItemRight />
    </div>
  );
}

export default Login;