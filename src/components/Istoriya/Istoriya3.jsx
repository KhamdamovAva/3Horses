import React from "react";
import IstoriyaData from "../Data/IstoriyaData";

export default function Istoriya3() {
  return (
    <section className="container mx-auto px-5 lg:px-0 my-16">
      {IstoriyaData.map((item) => (
        <article key={item.id} className="mt-10">
          <h4 className="text-4xl font-semibold text-[#591516] text-start lg:text-end mb-6">
            {item.h4}
          </h4>

          <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
            <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto items-center">
              <img
                src={item.img7}
                alt="image 7"
                className="w-full max-w-[300px] h-auto object-contain rounded-md"
                loading="lazy"
              />
              <p className="text-[#262626] text-base font-normal leading-7 flex-1 break-words">
                {item.text4}
              </p>
            </div>

            <img
              src={item.img8}
              alt="image 8"
              className="w-full max-w-[432px] h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </article>
      ))}
    </section>
  );
}
