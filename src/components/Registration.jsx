import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import regImg from '../assets/images/regImg.png'

function Registration() {
  return (
    <>
      <Navbar />
      <div className='container min-h-[100vh] pt-[200px]'>
        <form action="#" className='max-w-[428px] rounded-[10px] p-[40px] text-center min-h-[474px] m-auto' style={{
          backgroundImage: `url(${regImg})`,
          backgroundBlendMode: 'overlay',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div className='mt-[130px]'>
            <button className='w-full text-[18px] cursor-pointer rounded-[10px] p-[10px] h-[50px] mb-[20px] bg-white text-black hover:bg-black hover:text-white
            transition ease-in-out duration-600'>
              Зарегистрироваться
            </button>
            <button className='w-full text-[18px] cursor-pointer rounded-[10px] p-[10px] h-[50px] bg-white text-black hover:bg-black hover:text-white
           transition ease-in-out duration-600'>
              Войти
            </button>
          </div>
        </form>
      </div>
      <Footer />

    </>

  )
}

export default Registration
