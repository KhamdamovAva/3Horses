import React from "react";
import Istoria1 from './Istoriya1'
import Background from "../../assets/images/background.jpg";


export default function Istoria() {
  return (
    <>
      <div className="relative w-full h-[280px] pt-30">
        <div>
          <img
            src={Background}
            alt="Foto"
            className="w-full h-[228px] object-cover object-center brightness-95"
          />
        </div>
        <div className="container">
          <h1 className="absolute top-1/2 translate-y-2/3 text-6xl font-semibold leading-[68px] text-[#591516]">
            История
          </h1>
        </div>
        <Istoria1 />
      </div>
    </>
  );
}
