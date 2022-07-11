import React from 'react'
import Health from './../assets/images/health.png'
import Logo from './../assets/images/logo.png'
import { useDispatch } from 'react-redux'
import { login } from './../redux/slices/auth'
import { useNavigate } from 'react-router-dom'
import { dummy_user } from '../dummy/data'

import './css/Login.css'

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className='Login'>

      <div className='image'>
        <img src={Health} alt="Health" />
      </div>

      <div className='form'>
        <div className='content'>

          <img src={Logo} alt="Logo" />

          <form>
            <p>Welcome back</p>

            <h1>Login to your account</h1>

            <div className='field username'>
              <p>Username</p>
              <input type="text" required />
            </div>

            <div className='field passoword'>
              <p>Password</p>
              <input type="password" required />
            </div>

            <div className='options'>
              <div className='remember'>
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p>Forgot Password?</p>
            </div>

            <div className='field submit'>
              <input type="submit" value="Login now"
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(login(dummy_user))
                  navigate('/')
                }}
              ></input>
            </div>
          </form>

        </div>

      </div>

      <div className='line'></div>

    </div>
  )
}

export default Login