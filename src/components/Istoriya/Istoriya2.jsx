import React from "react";
import IstoriyaData from "../Data/IstoriyaData";

export default function Istoriya2() {
  return (
    <>
    <div className="container">
      {IstoriyaData.map((items) => (
        <div className="flex items-center justify-between ">
          <div>
        <h1 key={items.id} className="text-4xl font-semibold text-[#591516] mb-4"> {items.h3} </h1>
        <p className="text-[#262626] text-base font-normal leading-6 w-[686px]">{items.text3}</p>
        <div className="flex gap-10 items-center pt-6">
        <img src={items.img4} alt="Foto" className="w-[432px] h-[196px]" />
        <img src={items.img5} alt="Foto" className="w-[240px] h-[196px]" />
        </div>
        </div>
        <img src={items.img6} alt="Foto" className="w-[433px] h-[460px]" />
        </div>
      ))}
    </div>
    </>
  );
}
