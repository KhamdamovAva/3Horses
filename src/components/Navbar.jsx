import React from 'react'
import navLogo from '../assets/icons/navLogo.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='flex justify-center bg-white shadow-md fixed w-full z-10'>
                <div className='container mx-auto flex justify-between items-center h-[80px] px-[10px]'>
                    <NavLink to="/">
                        <img src={navLogo} alt="Logotype" className='w-[65px] md:w-[80px]' />
                    </NavLink>
                    <div className='flex gap-2 md:gap-8'>
                        <NavLink className='font-sans text-[12px] sm:text-[18px] md:text-xl' to='/'>
                            Главная
                        </NavLink>
                        <a href="#" className='font-sans text-[12px] sm:text-[18px] md:text-xl'>Мероприятия</a>
                        <NavLink className='font-sans text-[12px] sm:text-[18px] md:text-xl' to='/registration'>
                            Личный кабинет
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
