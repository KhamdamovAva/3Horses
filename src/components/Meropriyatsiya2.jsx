// src/components/Meropriyatsiya2.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from '../assets/images/background.jpg';
import Meropriyatsiya2Data from './Data/Meropriyatsiya2Data';

const Card = ({ item }) => (
  <div className="relative flex flex-col">
    <img
      src={item.img}
      alt={item.h1}
      className="w-[40%]  sm:w-full min-h-[228px] object-cover rounded-xl"
    />

    {/* дата поверх картинки */}
    <div className="absolute inset-x-0 bottom-0 flex justify-center">
      <div className="bg-[#FCF7F1] text-[#591516] w-40 h-24 flex flex-col items-center justify-center rounded-t-md">
        <span className="text-3xl lg:text-4xl font-semibold">23</span>
        <span className="text-sm lg:text-base">{item.text}</span>
      </div>
    </div>

    {/* контент */}
    <div className="mt-6">
      <h2 className="text-xl lg:text-2xl font-medium mb-4">{item.h1}</h2>

      <div className="flex items-center gap-3 mb-3">
        <p className="text-sm lg:text-base">{item.p}</p>
        <div className="flex-1 border-b border-[#B0ACA8]" />
        <p className="text-sm lg:text-base">{item.p2}</p>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm lg:text-base">{item.p3}</p>
        <div className="flex-1 border-b border-[#B0ACA8]" />
        <p className="text-sm lg:text-base">{item.p4}</p>
      </div>
    </div>
  </div>
);

export default function Meropriyatsiya2() {
  // продублировали данные 5 × (как было)x
  const repeatedData = Array.from({ length: 5 }, () => Meropriyatsiya2Data).flat();

  return (
    <>
      <Navbar />

      {/* шапка */}
      <section className="relative">
        <img
          src={Background}
          alt="background"
          className="w-full h-56 sm:h-72 object-cover brightness-95"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#591516]">
          Мероприятия
        </h1>
      </section>

      {/* сетка карточек */}
      <section className="container mx-auto py-12 px-4 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {repeatedData.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
