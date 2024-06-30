import React, { useEffect } from 'react'
import RegisterItemLeft from '../../components/register-item-left/RegisterItemLeft'
import RegisterItemRight from '../../components/register-item-right/RegisterItemRight'
function Register() {
  useEffect(() => {
    document.title = "Đăng kí - Bộ Y Tế"
  }, [])
  return (
    <div className='flex'>
      <RegisterItemLeft />
      <RegisterItemRight />
    </div>
  )
}

export default Register
