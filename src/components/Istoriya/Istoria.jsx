import React from "react";
import Istoria1 from './Istoriya1';
import Background from "../../assets/images/background.jpg";
import Navbar from "../Navbar";

export default function Istoria() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[380px] pt-20 sm:pt-24 md:pt-28">
        <img
          src={Background}
          alt="Foto"
          className="w-full h-[200px] sm:h-[228px] md:h-[280px] object-cover object-center brightness-95"
          loading="lazy"
        />
        <div className="container mx-auto px-5 md:px-0">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#591516] text-center select-none pointer-events-none"
          >
            История
          </h1>
        </div>
      </div>

      <Istoria1 />
    </>
  );
}
