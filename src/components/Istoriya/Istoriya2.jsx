import React from "react";
import IstoriyaData from "../Data/IstoriyaData";

export default function Istoriya2() {
  return (
    <section className="container mx-auto px-5 lg:px-0 my-16">
      {IstoriyaData.map((item) => (
        <article
          key={item.id}
          className="flex flex-col lg:flex-row  items-center justify-between gap-8"
        >
          <div className="w-full max-w-xl">
            <h3 className="text-4xl font-semibold text-[#591516] mb-4 items-start text-center lg:text-left">
              {item.h3}
            </h3>
            <p className="text-[#262626] text-base font-normal leading-7 w-full md:w-[686px] break-words">
              {item.text3}
            </p>
            <div className="flex flex-col md:flex-row gap-10 items-center pt-6">
              <img
                src={item.img4}
                alt="image 4"
                className="w-full max-w-[432px] h-[196px] object-cover rounded-md"
                loading="lazy"
              />
              <img
                src={item.img5}
                alt="image 5"
                className="w-full max-w-[240px] h-[196px] object-cover rounded-md"
                loading="lazy"
              />
            </div>
          </div>
          <img
            src={item.img6}
            alt="image 6"
            className="w-full max-w-[283px] h-auto object-cover rounded-md"
            loading="lazy"
          />
        </article>
      ))}
    </section>
  );
}
