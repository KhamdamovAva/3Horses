import React from 'react'
import navLogo from '../assets/icons/navLogo.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='flex justify-center bg-white shadow-md fixed w-full z-10'>
                <div className='container mx-auto flex justify-between items-center h-[80px]'>
                    <NavLink to="/">
                        <img src={navLogo} alt="Logotype" className='w-[80px]' />
                    </NavLink>
                    <div className='flex gap-8'>
                        <NavLink className='font-sans text-xl' to='/'>
                            Главная
                        </NavLink>
                        <a href="#" className='font-sans text-xl'>Мероприятия</a>
                        <NavLink className='font-sans text-xl' to='/registration'>
                            Личный кабинет
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
