import React from "react";
import IstoriyaData from "../Data/IstoriyaData";

export default function Istoriya4() {
  return (
    <section className="container mx-auto px-5 lg:px-0 pb-[206px] my-16">
      {IstoriyaData.map((item) => (
        <article
          key={item.id}
          className="flex flex-col md:flex-row gap-8 justify-between items-start"
        >
          <p className="text-[#262626] text-base font-normal leading-7 w-full lg:w-[794px] self-start break-words">
            {item.text5}
          </p>
          <img
            src={item.img9}
            alt="image 9"
            className="w-full max-w-[324px] h-auto object-contain rounded-md"
            loading="lazy"
          />
        </article>
      ))}
    </section>
  );
}
