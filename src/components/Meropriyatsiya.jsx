import Navbar from "./Navbar";
import Footer from "./Footer";
import Oldbuilding from "../assets/images/old-building.jpg";
import { Link } from "react-router-dom";

export default function Meropriyatsiya() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-40 px-4 sm:px-6 lg:px-10">
        <h1 className="flex items-center text-[#591516] font-normal text-[20px] sm:text-[28px] leading-[30px] sm:leading-[36px]">
          <span className="flex-grow border-t border-[#591516] mr-4 sm:mr-6"></span>
          23 апреля
          <span className="flex-grow border-t border-[#591516] ml-4 sm:ml-6"></span>
        </h1>
        <h2 className="text-center font-semibold text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[48px] pt-6">
          Встреча выпускников. <br />
          Первое заседание клуба «Три коня»
        </h2>

        <div className="pt-10 sm:pt-20 w-full h-[280px] sm:h-[400px] lg:h-[480px] overflow-hidden rounded-md">
          <img
            src={Oldbuilding}
            alt="Foto"
            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700 ease-in-out"
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-14 sm:mt-20 gap-10 lg:gap-11 items-start">
          <div className="w-full lg:w-[786px]">
            <h2 className="text-[#262626] font-normal text-[22px] sm:text-[24px] lg:text-[28px]">
              Встреча выпускников. Первое заседание клуба «Три коня»
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[24px] font-normal pt-6 sm:pt-11">
              В этом году клуб «Три коня» с гордостью отмечает важную веху в
              своей истории — 40 лет с момента выпуска студентов факультета «М»
              МГТУ им. Баумана. Это мероприятие станет уникальной возможностью
              для всех участников — студентов, выпускников и преподавателей —
              вновь собраться вместе и поделиться воспоминаниями о тех днях,
              которые сформировали будущее многих успешных профессионалов в
              разных областях.
            </p>
          </div>
          <div className="hidden lg:block w-px h-[205px] bg-[#B0ACAB] self-stretch"></div>
          <div className="flex flex-col justify-start w-full lg:w-auto">
            <h2 className="text-[#262626] font-normal text-[22px] sm:text-[24px] lg:text-[28px]">
              Основная информация
            </h2>
            <h3 className="text-[#262626] font-semibold text-[16px] pt-6">
              Место проведения <br />
              <span className="font-normal text-[16px]">
                Бутырская ул. Д.75
              </span>
            </h3>
            <h3 className="text-[#262626] font-semibold text-[16px] pt-3">
              Дата проведения <br />
              <span className="font-normal text-[16px]">23 апреля, 17:00</span>
            </h3>
          </div>
        </div>

         <Link to={'/Meropriyatsiya2'}><button className="w-full cursor-pointer h-[56px] mt-10 mb-32 text-[16px] font-normal text-[#262626] border border-[#262626] text-center bg-transparent hover:bg-[#f2f2f2] transition-colors duration-300">
          Оставить заявку на участие
        </button></Link>
      </div>
      <Footer />
    </>
  );
}
