import React from 'react'
import IstoriyaData from '../Data/IstoriyaData'

export default function Istoriya4() {
  return (
    <>
      <div className='container pb-[206px] lg:px-0 px-5'>
        {IstoriyaData.map((items) => (
          <div className='flex md:flex-row flex-col gap-6 justify-between items-start pt-10' key={items.id}>
            <p className='text-[#262626] text-base font-normal leading-6 w-full lg:w-[794px] self-start'>
              {items.text5}
            </p>
            <img src={items.img9} alt="Foto" className='w-[324px] h-[355px] object-contain' />
          </div>
        ))}
      </div>
    </>
  )
}
