import React from 'react'
import navLogo from '../assets/icons/navLogo.svg'

function Navbar() {
    return (
        <>
            <nav className='flex justify-center bg-white shadow-md fixed w-full z-10'>
                <div className='container mx-auto flex justify-between items-center h-[80px]'>
                    <img src={navLogo} alt="" className='w-[80px]'/>
                    <div className='flex gap-8'>
                        <a href="" className='font-sans text-xl'>Главная</a>
                        <a href="" className='font-sans text-xl'>Мероприятия</a>
                        <a href="" className='font-sans text-xl'>Личный кабинет</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar