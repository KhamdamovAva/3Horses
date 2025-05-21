import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import regImg from '../assets/images/regImg.png'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
      <Navbar />
      <div className='container pt-[160px] pb-[100px]'>
        <form action="#" className='max-w-[428px] rounded-[10px] p-[60px] text-center min-h-[474px] m-auto' style={{
          backgroundImage: `url(${regImg})`,
          backgroundBlendMode: 'overlay',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div>
            <div className='w-full p-[10px] bg-black rounded-[10px] text-white mb-[30px] text-center text-lg font-semibold'>
              Вход
            </div>

            <div>
              <input className='w-full bg-white p-[10px] rounded-[10px] mb-[30px] ' type="text" placeholder='Логин' />
              <input className='w-full bg-white p-[10px] rounded-[10px] mb-[40px] ' type="password" placeholder='Пароль' />

            </div>
            <div className='flex justify-between'>
              <NavLink to="/">
                <button className='cursor-pointer bg-white w-[130px] p-[10px] rounded-[10px] hover:bg-black hover:text-white
           transition ease-in-out duration-600'>Войти</button>
              </NavLink>
              <NavLink to='/registration'>
                <button className='cursor-pointer bg-transparent text-white p-[10px] border-[2px] border-white w-[130px] rounded-[10px] hover:bg-white
              hover:text-black transition ease-in-out duration-600'>Отменить</button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
