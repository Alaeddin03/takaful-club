import React, { useEffect, useState } from 'react'
import Glass from '../components/Glass'
import loginImage from '../assets/login.svg'
import LoginInput from '../components/Login/LoginInput'
import CenterMainContainer from '../components/CenterMainContainer'
import { FiLogIn } from 'react-icons/fi'
import { getItem, isLoggedIn, logIn, setItem } from '../helpers/helper'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {

    e.preventDefault();

    console.log(`submitted: ${username}, ${password}`);

    const res = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json();

    console.log(data);

    if (data.message) return setError(data.message);

    if (data.role === 'admin') {
      setError('');
      logIn(data.role);
      return navigate('/staff/admin');
    }

    if (data.role === 'driver') {
      setError('');
      logIn(data.role);
      setItem('accountId', data.account.id);
      setItem('accountName', data.account.name);
      return navigate('/staff/driver');
    }

  }

  useEffect(() => {
    if (isLoggedIn()) {
      if (getItem('role') === 'admin') return navigate('/staff/admin');
      if (getItem('role') === 'driver') return navigate('/staff/driver');
    }
  }, [])

  return (
    <>
      <CenterMainContainer>
        <div className={'flex items-center justify-center w-full h-full'}>
          <Glass>
            <div className="p-8 flex flex-row-reverse items-center justify-around gap-8 w-[50vw] min-w-[280px] max-md:flex-col">
              <div className='w-1/2 p-2 flex items-center justify-center max-md:w-full'>
                <img src={loginImage} alt="" className='w-32 md:w-52' />
              </div>
              <div className='w-1/2 max-md:w-full'>
                <form onSubmit={(e) => handleSubmit(e)} className='w-full flex flex-col items-center'>
                  <LoginInput name='username' type='text' text='اسم المستخدم' placeholder='أدخل اسم المستخدم' error='اسم المستخدم خاطئ' value={username} onChange={setUsername} />
                  <LoginInput name='password' type='password' text='كلمة المرور' placeholder='أدخل كلمة المرور' error='كلمة السر خاطئة' value={password} onChange={setPassword} />
                  {error &&
                    <label className='mb-8'>
                      <span className="text-red-800">
                        {error}
                      </span>
                    </label>
                  }
                  <div className='w-full flex items-center justify-center'>
                    <button type='submit'
                      className='btn btn-  btn-info' dir='rtl'>
                      <div className='ml-2'>
                        تسجيل الدخول
                      </div>
                      <FiLogIn className='rotate-180' />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Glass>
        </div>
      </CenterMainContainer>
    </>
  )
}
