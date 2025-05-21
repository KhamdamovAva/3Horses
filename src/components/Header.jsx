import React from 'react'
import backImage from "../assets/images/background.jpg";

function Header() {
    return (
        <>
            <div className="h-[100vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backImage})`,
                    backgroundBlendMode: 'overlay',
                }}>
                <h1 className='text-[64px] font-bold mb-4 leading-19 text-[#7c0000]'>Три коня - сохраняя <br />традиции</h1>
                <a href='' className='bg-[#8c0000] text-white text-[15px] px-[40px] py-[15px] font-bold cursor-pointer transition-all duration-300 hover:bg-[#a00000]'>
                    Подробнее о мероприятии
                </a>
            </div>
        </>
    )
}

export default Header