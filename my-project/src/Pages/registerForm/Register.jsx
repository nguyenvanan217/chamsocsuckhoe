import React from 'react'
import RegisterItemLeft from '../../components/register-item-left/RegisterItemLeft'
import RegisterItemRight from '../../components/register-item-right/RegisterItemRight'
function Register() {
  return (
    <div className='flex'>
      <RegisterItemLeft />
      <RegisterItemRight />
    </div>
  )
}

export default Register
