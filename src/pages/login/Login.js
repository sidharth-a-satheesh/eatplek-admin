import React from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const navigateHome = () =>{
    navigate('/')
  }

  return (
    <div className='main-login'>
      <div className="login-page">
        <div clclassNameass="form">
          <h1>Admin Login</h1>
          <form clclassNameass="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={navigateHome}>login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login