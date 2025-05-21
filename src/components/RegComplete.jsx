import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import regImg from '../assets/images/regImg.png'
import { NavLink } from 'react-router-dom'

function RegComplete() {
  return (
    <>
      <Navbar />
      <div className='container pt-[160px] pb-[100px]'>
        <div className='max-w-[428px] rounded-[10px] p-[40px] text-center min-h-[474px] m-auto' style={{
          backgroundImage: `url(${regImg})`,
          backgroundBlendMode: 'overlay',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div className='w-[280px] mt-[160px] m-auto min-h-[70px] text-[17px] mb-[50px] bg-black/60 font-[700] text-white rounded-[10px] py-[20px] px-[20px]'>
            Регистрация успешно завершена!
          </div>
          <NavLink to='#'>
            <button className='cursor-pointer w-[188px] min-h-[40px] p-[10px] rounded-[10px] bg-white hover:bg-black
            hover:text-white transition ease-in-out duration-600'>К мероприятиям</button>
          </NavLink>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default RegComplete
