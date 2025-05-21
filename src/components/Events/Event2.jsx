import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import regImg from '../../assets/images/regImg.png'
import { NavLink } from 'react-router-dom'

function Event2() {
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
          <div>
            <div className='w-full p-[10px] bg-black rounded-[10px] text-white mb-[40px] text-center text-lg font-semibold'>
              Меро “2”
            </div>

            <div>
              <div className='w-full min-h-[100px] text-[14px] bg-white p-[20px] text-start rounded-[10px] mb-[60px]'>
                <p className='mb-[10px]'><span className='font-bold'>Дата проведения:</span> 23 апреля 17.00</p>
                <p><span className='font-bold'>Место проведения:</span> Чертова ул. д.666</p>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-[20px] gap-[10px] text-[15px]'>
                <NavLink to='/RegForm'>
                  <button className='bg-white min-w-[130px] cursor-pointer min-h-[70px] p-[10px] rounded-[10px] hover:bg-black hover:text-white
           transition ease-in-out duration-600'>Зарегистрироваться</button>
                </NavLink>

                <NavLink to="/events">
                  <button className='bg-transparent min-w-[130px] min-h-[70px] text-white border-[2px] border-white cursor-pointer  p-[10px] rounded-[10px]
                 hover:bg-white hover:text-black
           transition ease-in-out duration-600'>Отменить регистрацию</button>
                </NavLink>
              </div>
              <NavLink to='/events'>
                <button className='cursor-pointer bg-transparent text-white p-[10px] border-[2px] border-white w-full rounded-[10px] hover:bg-white
              hover:text-black transition ease-in-out duration-600'>Назад</button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Event2
