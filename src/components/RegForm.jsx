import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import regImg from '../assets/images/regImg.png'
import { NavLink } from 'react-router-dom'

function RegForm() {
  return (
    <>
      <Navbar />
      <div className='container min-h-[100vh] pt-[160px]'>
        <form action="#" className='max-w-[428px] rounded-[10px] p-[40px] text-center min-h-[474px] m-auto' style={{
          backgroundImage: `url(${regImg})`,
          backgroundBlendMode: 'overlay',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div>
            <div className='w-full p-[10px] bg-black rounded-[10px] text-white mb-[30px] text-center text-lg font-semibold'>
              Регистрация
            </div>

            <div>
              <input className='w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center' type="text" placeholder='Ф.И.О' />
              <input className='w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center' type="email" placeholder='Почта' />
              <input className='w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center' type="password" placeholder='Пароль' />
              <input className='w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center' type="text" placeholder='Факультет' />
              <input className='w-full bg-white p-[10px] rounded-[10px] mb-[30px] placeholder:text-center' type="text" placeholder='Год выпуска' />
            </div>
            <div className='flex justify-between'>
              <button className='cursor-pointer bg-white w-[130px] p-[10px] rounded-[10px] hover:bg-black hover:text-white
           transition ease-in-out duration-600'>Дальше</button>
              <button className='cursor-pointer bg-transparent text-white p-[10px] border-[2px] border-white w-[130px] rounded-[10px] hover:bg-white
              hover:text-black transition ease-in-out duration-600'>Отменить</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default RegForm
