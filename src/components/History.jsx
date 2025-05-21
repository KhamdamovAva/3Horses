import React from 'react'
import historyImg1 from "../assets/images/historyImg1.png"
import historyImg2 from "../assets/images/historyImg2.png"
import historyImg3 from "../assets/images/historyImg3.png"
import historyImg4 from "../assets/images/historyImg4.png"

function History() {
  return (
    <section className='py-[50px]'>
      <div className='text-center mb-[60px]'>
        <h2 className='text-[50px] font-[600] text-[#591516]'>История</h2>
      </div>
      <div className="container">
        <div className='flex gap-[30px]'>
          <div className='w-[58%]'>
            <div className='flex flex-wrap justify-between gap-[20px] mb-[20px]'>
              <p className='max-w-[380px] font-[400] leading-[150%] text-[16px]'>В непосредственной близости от МГТУ им. Баумана, на улице Фридриха Энгельса, располагалось заведение с названием «Три коня», получившее его благодаря вывеске с изображением трёх лошадей. Это место стало важной частью студенческой жизни, привлекая студентов для неформальных встреч и обсуждений научных и личных вопросов в уютной обстановке.
                «Три коня» стало не только местом отдыха, но и символом студенческих традиций. Здесь зарождались традиции, передававшиеся от поколения к поколению. Студенты старших курсов часто знакомили первокурсников с этим заведением, укрепляя связь между поколениями.</p>
              <img className='w-[300px] h-[373px]' src={historyImg1} alt={historyImg1} />
            </div>
            <p className='font-[400] leading-[150%] text-[16px]'>На сегодняшний день заведение «Три коня» прекратило своё существование, став утратой для студенческого сообщества. Тем не менее, память о нём продолжает жить в рассказах выпускников и новых поколениях клуба «Три коня», который сохраняет традиции и создаёт новые возможности для общения и обмена опытом.
              Сегодня клуб «Три коня» продолжает быть местом для встреч студентов и выпускников, создания научных и культурных проектов и укрепления связи между поколениями.</p>
          </div>
          <div className='w-[42%]'>
            <div className='flex justify-between flex-wrap mb-[30px]'>
              <img src={historyImg2} alt={historyImg2} />
              <img src={historyImg3} alt={historyImg3} />
            </div>
            <div className='flex justify-end'>
              <img src={historyImg4} alt={historyImg4} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default History
