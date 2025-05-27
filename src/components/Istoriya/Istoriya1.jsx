import React from "react";
import IstoriyaData from "../Data/IstoriyaData";
import Istoriya2 from "./Istoriya2";
import Istoriya3 from "./Istoriya3";
import Istoriya4 from "./Istoriya4";
import Footer from "../Footer";

export default function Istoriya() {
  return (
    <div className="w-full pt-16">
      <div className="container mx-auto px-5 lg:px-0">
        {IstoriyaData.map((item) => (
          <article
            key={item.id}
            className="mb-16 flex flex-col lg:flex-row gap-8 lg:justify-between justify-center "
          >
            <div className="flex flex-col max-w-xl w-full">
              <h1 className="text-4xl font-semibold text-[#591516] mb-6 text-center lg:text-left">
                {item.h1}
              </h1>
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
                <p
                  className="font-normal text-base leading-7 text-[#262626] w-full md:flex-1 max-w-full break-words"
                >
                  {item.text}
                </p>
                <img
                  src={item.img}
                  alt="illustration"
                  className="w-full max-w-[300px] h-auto object-contain rounded-md"
                  loading="lazy"
                />
              </div>
            </div>

            <aside className="flex flex-col mt-10 lg:mt-0 max-w-lg w-full">
              <h2 className="text-3xl font-semibold text-[#591516] mb-6 text-center lg:text-left">
                {item.h2}
              </h2>
              <p className="text-[#262626] mb-6 text-base leading-7 break-words">
                {item.text2}
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
                <img
                  src={item.img2}
                  alt="illustration 2"
                  className="max-w-[200px] w-full h-auto object-contain rounded-md"
                  loading="lazy"
                />
                <img
                  src={item.img3}
                  alt="illustration 3"
                  className="max-w-[200px] w-full h-auto object-contain rounded-md"
                  loading="lazy"
                />
              </div>
            </aside>
          </article>
        ))}
      </div>

      <Istoriya2 />
      <Istoriya3 />
      <Istoriya4 />
      <Footer />
    </div>
  );
}
