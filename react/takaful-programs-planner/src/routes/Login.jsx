import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import MainContainer from '../components/MainContainer'
import Glass from '../components/Glass'
import loginImage from '../assets/login.svg'
import LoginInput from '../components/LoginInput'
import { FiLogIn } from 'react-icons/fi'

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`submitted: ${username}, ${password}`);
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <MainContainer className={'h-screen'}>
        <div className={'flex items-center justify-center w-full h-full pt-14'}>
          <Glass>
            <div className="py-8 px-8 flex flex-row-reverse items-center justify-around gap-8 w-[50vw] min-w-[280px] max-md:flex-col">
              <div className='w-1/2 p-2 flex items-center justify-center max-md:w-full'>
                <img src={loginImage} alt="" className='w-32 md:w-52' />
              </div>
              <div className='w-1/2 max-md:w-full'>
                <form onSubmit={(e) => handleSubmit(e)} className='w-full'>
                  <LoginInput name='username' type='text' text='اسم المستخدم' placeholder='أدخل اسم المستخدم'  error='اسم المستخدم خاطئ' value={username} onChange={setUsername}/>
                  <LoginInput name='password' type='password' text='كلمة المرور' placeholder='أدخل كلمة المرور'  error='كلمة السر خاطئة' value={password} onChange={setPassword} />
                  <div className='w-full flex items-center justify-center'>
                    <button type='submit' 
                      className='transition-all py-1 px-4 rounded-lg bg-primary_blue text-light_gray border hover:bg-light_gray hover:text-primary_blue focus:bg-light_gray focus:text-primary_blue border-primary_blue flex items-center outline-none' dir='rtl'>
                      <div className='ml-2'>
                        تسجيل الدخول
                      </div>
                      <FiLogIn className='rotate-180'/>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Glass>
        </div>
      </MainContainer>
    </>
  )
}
