import React from "react";
import Istoria1 from './Istoriya1';
import Background from "../../assets/images/background.jpg";
import Navbar from "../Navbar2";

export default function Istoria() {
  return (
    <>
      <Navbar />
      <div className="relative w-full pt-20">
        <div>
          <img
            src={Background}
            alt="Foto"
            className="w-full h-[200px] sm:h-[228px] md:h-[280px] object-cover object-center brightness-95"
          />
        </div>
        <div className="container">
          <h1 className="absolute top-[25%] translate-y-[35%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#591516]">
            История
          </h1>
        </div>
        <Istoria1 />
      </div>
    </>
  );
}
