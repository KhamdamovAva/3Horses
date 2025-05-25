import React from 'react'
import IstoriyaData from '../Data/IstoriyaData'

export default function Istoriya3() {
  return (
    <>
      <div className='container'>
        {IstoriyaData.map((items) => (
          <div key={items.id}>
            <h1 className='text-end text-4xl font-semibold text-[#591516] mt-10'>{items.h4}</h1>
            <div className='flex justify-between pt-6 items-start'>
              <img src={items.img7} alt="Foto" className='w-[300px] h-[196px] object-contain' />
              <p className='text-[#262626] text-base font-normal leading-6 w-[492px] self-start'>
                {items.text4}
              </p>
              <img src={items.img8} alt="Foto" className='w-[432px] h-[341px] object-contain' />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
