import React from 'react'
import IstoriyaData from '../Data/IstoriyaData'

export default function Istoriya3() {
  return (
    <>
      <div className='container lg:px-0 px-5'>
        {IstoriyaData.map((items) => (
          <div key={items.id}>
            <h1 className='lg:text-end text-start text-4xl font-semibold text-[#591516] mt-10'>{items.h4}</h1>
            <div className='flex lg:flex-row flex-col gap-6 justify-between pt-6 items-start'>
              <div className="flex md:flex-row flex-col gap-6">
                <img src={items.img7} alt="Foto" className='w-[300px] h-[196px] object-contain' />
                <p className='text-[#262626] text-base font-normal leading-6 w-full lg:w-[492px] self-start'>
                  {items.text4}
                </p>
              </div>
              <img src={items.img8} alt="Foto" className='w-[432px] h-[341px] object-contain' />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
