import React from "react";
import Navbar from "./Navbar";
import Background from "../assets/images/background.jpg";
import Meropriyatsiya2Data from "./Data/Meropriyatsiya2Data";
import Footer from "./Footer";

export default function Meropriyatsiya2() {
  const repeatedData = [
    ...Meropriyatsiya2Data,
    ...Meropriyatsiya2Data,
    ...Meropriyatsiya2Data,
    ...Meropriyatsiya2Data,
    ...Meropriyatsiya2Data,
  ];

  const topItems = repeatedData.slice(0, 3);
  const bottomItems = repeatedData.slice(3, 5);

  return (
    <>
      <Navbar />
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
            Мероприятия
          </h1>
        </div>
        <div className="container pt-25 flex flex-col md:flex-row gap-10">
          {topItems.map((user, index) => (
            <div
              key={index}
              className="relative w-full md:w-[408px] h-[228px] mb-10 flex-shrink-0"
            >
              <img
                src={user.img}
                alt="foto"
                className="w-full h-full object-cover"
              />
              <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/12 text-center text-[#591516] bg-[#FCF7F1] w-[192px] h-[96px] pt-6">
                <span className="font-semibold text-[40px] leading-12">23</span>
                <br />
                {user.text}
              </h1>
              <div>
                <h1 className="pt-10 font-normal text-[28px] leading-[36px]">
                  {user.h1}.
                </h1>

                <div className="flex items-center gap-3 mt-6">
                  <p className="font-normal text-base leading-6">{user.p}</p>
                  <div className="w-[59px] h-[6px] border-b border-[#B0ACA8] relative -bottom-1"></div>

                  <p className="font-normal text-base leading-6">{user.p2}</p>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <p className="font-normal text-base leading-6">{user.p3}</p>

                  <div className="w-[132px] h-[6px] border-b border-[#B0ACA8] relative -bottom-1"></div>

                  <p className="font-normal text-base leading-6">{user.p4}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container pt-50 flex flex-col md:flex-row gap-10 pb-50">
          {bottomItems.map((user, index) => (
            <div
              key={index + 3}
              className="relative w-full md:w-[408px] h-[228px] mb-10 flex-shrink-0"
            >
              <img
                src={user.img}
                alt="foto"
                className="w-full h-full object-cover"
              />
              <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/12 text-center text-[#591516] bg-[#FCF7F1] w-[192px] h-[96px] pt-6">
                <span className="font-semibold text-[40px] leading-12">23</span>
                <br />
                {user.text}
              </h1>
              <div>
                <h1 className="pt-10 font-normal text-[28px] leading-[36px]">
                  {user.h1}.
                </h1>
                <div className="flex items-center gap-3 mt-6">
                  <p className="font-normal text-base leading-6">{user.p}</p>
                  <div className="w-[59px] h-[6px] border-b border-[#B0ACA8] relative -bottom-1"></div>
                  <p className="font-normal text-base leading-6">{user.p2}</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <p className="font-normal text-base leading-6">{user.p3}</p>
                  <div className="w-[132px] h-[6px] border-b border-[#B0ACA8] relative -bottom-1"></div>
                  <p className="font-normal text-base leading-6">{user.p4}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
