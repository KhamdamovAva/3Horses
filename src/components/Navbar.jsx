import React from 'react';
import navLogo from '../assets/icons/navLogo.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='flex justify-center bg-white shadow-md fixed w-full z-10'>
                <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center min-h-[80px] px-[10px]'>
                    <NavLink to="/">
                        <img src={navLogo} alt="Logotype" className='pt-[10px] sm:pt-0 w-[65px] md:w-[80px]' />
                    </NavLink>
                    <div className='flex pt-[10px] md:pt-0 pb-[20px] sm:pb-0 gap-4 md:gap-8'>

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-sans text-[14px] sm:text-[18px] md:text-xl border-b-2 ${isActive ? 'border-[#262626]' : 'border-transparent'
                                } hover:border-[#262626]`
                            }
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/Meropriyatsiya2"
                            className={({ isActive }) =>
                                `font-sans text-[14px] sm:text-[18px] md:text-xl border-b-2 ${isActive ? 'border-[#262626]' : 'border-transparent'
                                } hover:border-[#262626]`
                            }
                        >
                            Мероприятия
                        </NavLink>
                        <NavLink
                            to="/istoriya"
                            className={({ isActive }) =>
                                `font-sans text-[14px] sm:text-[18px] md:text-xl border-b-2 ${isActive ? 'border-[#262626]' : 'border-transparent'
                                } hover:border-[#262626]`
                            }
                        >
                            История
                        </NavLink>


                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                `font-sans text-[14px] sm:text-[18px] md:text-xl border-b-2 ${isActive ? 'border-[#262626]' : 'border-transparent'
                                } hover:border-[#262626]`
                            }
                        >
                            Галерея
                        </NavLink>
                        <NavLink
                            to="/registration"
                            className={({ isActive }) =>
                                `font-sans text-[14px] sm:text-[18px] md:text-xl border-b-2 ${isActive ? 'border-[#262626]' : 'border-transparent'
                                } hover:border-[#262626]`
                            }
                        >
                            Личный кабинет
                        </NavLink>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
