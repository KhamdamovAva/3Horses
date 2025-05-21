import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import regImg from '../assets/images/regImg.png'
import { NavLink } from 'react-router-dom'

function Registration() {
  return (
    <>
      <Navbar />
      <div className='container pt-[160px] pb-[100px]'>
        <form action="#" className='max-w-[428px] rounded-[10px] p-[40px] text-center min-h-[474px] m-auto' style={{
          backgroundImage: `url(${regImg})`,
          backgroundBlendMode: 'overlay',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div className='mt-[130px]'>
            <NavLink to='/regForm'>
              <button className='w-full text-[18px] cursor-pointer rounded-[10px] p-[10px] h-[50px] mb-[20px] bg-white text-black hover:bg-black hover:text-white
            transition ease-in-out duration-600'>
                Зарегистрироваться
              </button>
            </NavLink>
            <NavLink to="/Login">
              <button className='w-full text-[18px] cursor-pointer rounded-[10px] p-[10px] h-[50px] bg-white text-black hover:bg-black hover:text-white
           transition ease-in-out duration-600'>
                Войти
              </button>
            </NavLink>
          </div>
        </form>
      </div>
      <Footer />

    </>

  )
}

export default Registration
