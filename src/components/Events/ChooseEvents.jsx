import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import regImg from '../../assets/images/regImg.png'
import { NavLink } from 'react-router-dom'

function ChooseEvents() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto pt-[160px] pb-[100px]'>
        <form action="#" className='max-w-[428px] rounded-[10px] p-[60px] text-center min-h-[474px] m-auto' style={{
          backgroundImage: `url(${regImg})`,
          backgroundBlendMode: 'overlay',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div>
            <div className='w-full p-[10px] bg-black rounded-[10px] text-white mb-[30px] text-center text-lg font-semibold'>
              Выберите мероприятие
            </div>

            <div>
              <NavLink to="/event1">
                <button className='w-full cursor-pointer bg-white p-[10px] rounded-[10px] mb-[30px] hover:bg-black
              hover:text-white transition ease-in-out duration-600'>Меро 1</button>
              </NavLink>
              <NavLink to="/event2">
                <button className='w-full cursor-pointer bg-white p-[10px] rounded-[10px] mb-[30px] hover:bg-black
              hover:text-white transition ease-in-out duration-600'>Меро 2</button>
              </NavLink>
              <NavLink to="/event3">
                <button className='w-full cursor-pointer bg-white p-[10px] rounded-[10px] mb-[30px] hover:bg-black
              hover:text-white transition ease-in-out duration-600'>Меро 3</button>
              </NavLink>
            </div>
            <div>
              <NavLink to='/'>
                <button className='cursor-pointer bg-transparent text-white p-[10px] border-[2px] border-white w-full rounded-[10px] hover:bg-white
              hover:text-black transition ease-in-out duration-600'>На главную</button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default ChooseEvents
