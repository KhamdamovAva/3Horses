import React from 'react'
import image1 from "../assets/images/classroom.jpg"
import image2 from "../assets/images/students.jpg"

function About() {
  return (
    <section className='py-[50px] container m-auto'>
      <div className='text-center mb-[60px]'>
        <h2 className='text-[50px] font-[600] text-[#591516]'>О нас</h2>
      </div>
      <div>
        <div className='flex flex-col items-center m-auto p-4 md:items-start md:justify-between md:flex-row gap-4 w-full mb-[0px] sm:mb-[50px]'>
          <p className="text-[15px] sm:text-[20px] font-sans w-full md:w-[730px]">Клуб «Три коня» — это уникальное пространство для студентов и выпускников МГТУ им.
            Баумана, где сохраняются традиции общения, обмена знаниями и налаживания связей. Мы стремимся восстановить атмосферу,
            которая когда-то объединяла студентов и преподавателей, создавая условия для творческого и профессионального роста.
          </p>
          <img src={image1} alt="classroom" className="max-w-[100%] sm:max-w-[350px] px-[30px] md:px-0 md:mr-[30px]" />
        </div>
        <div className='flex flex-col items-center m-auto p-5 md:justify-start md:flex-row gap-4 w-full'>
          <p className='text-[15px] sm:text-[20px] font-sans w-full md:w-[750px] md:mr-[100px]'>Концепция клуба: <br />
            Клуб как историческое наследие студентов и преподавателей МГТУ им. Баумана, располагался на ул. Фридриха Энгельса.
            Идея – восстановить атмосферу клуба.
            <br /><br />
            Клуб будет служить платформой для неформального общения, обмена опытом и знаний между студентами и выпускниками.
            Мы хотим создать пространство, где каждый сможет найти поддержку,
            вдохновение и новые возможности для развития.
          </p>
          <img src={image2} alt="students" className='w-[90%] sm:max-w-[300px]' />
        </div>
      </div>
    </section>
  )
}

export default About
