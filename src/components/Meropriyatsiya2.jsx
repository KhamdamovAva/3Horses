import React, { useState } from "react";
import Navbar from "./Navbar2";
import Footer from "./Footer";
import Background from "../assets/images/background.jpg";
import Meropriyatsiya2Data from "./Data/Meropriyatsiya2Data";

const months = [
  { month: "Январь", year: 2025 },
  { month: "Февраль", year: 2025 },
  { month: "Март", year: 2025 },
  { month: "Апрель", year: 2025 },
  { month: "Май", year: 2025 },
  { month: "Июнь", year: 2025 },
];

const Card = ({ item }) => (
  <div className="relative flex flex-col mt-[40px]">
    <img
      src={item.img}
      alt={item.h1}
      className="w-full min-h-[228px] object-cover"
    />
    <div className="absolute inset-x-0 top-[40%] flex justify-center">
      <div className="bg-[#FCF7F1] text-[#591516] w-32 sm:w-40 h-20 sm:h-24 flex flex-col items-center justify-center rounded-t-md">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">23</span>
        <span className="text-xs sm:text-sm lg:text-base">{item.text}</span>
      </div>
    </div>
    <div className="mt-6 px-2 sm:px-0">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-4">
        {item.h1}
      </h2>
      <div className="flex items-center gap-3 mb-3">
        <p className="text-xs sm:text-sm lg:text-base">{item.p}</p>
        <div className="flex-1 border-b border-[#B0ACA8]" />
        <p className="text-xs sm:text-sm lg:text-base">{item.p2}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-xs sm:text-sm lg:text-base">{item.p3}</p>
        <div className="flex-1 border-b border-[#B0ACA8]" />
        <p className="text-xs sm:text-sm lg:text-base">{item.p4}</p>
      </div>
    </div>
  </div>
);

export default function Meropriyatsiya2() {
  const [monthIndex, setMonthIndex] = useState(3); // start from April
  const currentMonth = months[monthIndex];
  const repeatedData = Array.from({ length: 5 }, () => Meropriyatsiya2Data).flat();

  const handlePrev = () => {
    setMonthIndex((prev) => (prev - 1 + months.length) % months.length);
  };

  const handleNext = () => {
    setMonthIndex((prev) => (prev + 1) % months.length);
  };

  return (
    <>
      <Navbar />
      <section className="relative w-full h-[280px] pt-20">
        <img
          src={Background}
          alt="Foto"
          className="w-full h-[228px] object-cover object-center brightness-95"
        />
        <div className="container">
          <h1 className="absolute top-2/4 translate-y-2/8 text-6xl font-semibold leading-[68px] text-[#591516]">
            Мероприятия
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-0 pt-[100px] pb-[100px]">
        <div className="flex justify-end items-center mb-6 gap-2">
          <button
            onClick={handlePrev}
            className="w-[14px] h-[24px] text-[#591516] flex items-center justify-center text-xl"
          >
            &lt;
          </button>
          <span className="text-[#591516] text-[16px] font-medium">
            {currentMonth.month}, {currentMonth.year}
          </span>
          <button
            onClick={handleNext}
            className="w-[14px] h-[24px] text-[#591516] flex items-center justify-center text-xl"
          >
            &gt;
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-6">
          {repeatedData.map((item, idx) => (
            <div
              key={idx}
              className="sm:w-[calc(33.333%-1rem)]"
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
