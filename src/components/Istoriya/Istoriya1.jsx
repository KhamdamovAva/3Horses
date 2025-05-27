import React from "react";
import IstoriyaData from "../Data/IstoriyaData";
import Istoriya2 from "./Istoriya2";
import Istoriya3 from "./Istoriya3";
import Istoriya4 from "./Istoriya4";
import Footer from "../Footer"

export default function Istoriya() {
  return (
    <>
      <div className="w-full h-[280px] pt-15">

        <div className="container pt-15 lg:px-0 px-5">
          {IstoriyaData.map((items) => (
            <div
              key={items.id}
              className="mb-16 flex lg:flex-row flex-col items-center lg:justify-between justify-center"
            >
              <div>
                <h1 className="text-4xl font-semibold text-[#591516] mb-4">
                  {items.h1}
                </h1>
                <div className="w-full flex md:flex-row flex-col-reverse justify-center gap-6">
                  <p className="font-normal text-base leading-6 text-[#262626] w-full md:w-[408px]">
                    {items.text}
                  </p>
                  <img
                    src={items.img}
                    alt="rasm 1"
                    className="w-[300px] h-[373px]"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-semibold text-[#591516] mt-12 mb-6">
                  {items.h2}
                </h2>
                <p className="mb-6 text-[#262626] lg:w-[516px]">{items.text2}</p>
                <div className="flex md:flex-row flex-col items-center gap-10">
                  <img src={items.img2} alt="rasm 2" />
                  <img src={items.img3} alt="rasm 3" />
                </div>
              </div>
            </div>
          ))}
        </div>
          <Istoriya2 />
          <Istoriya3 />
          <Istoriya4 />
          <Footer/>
        </div>
    </>
  );
}
