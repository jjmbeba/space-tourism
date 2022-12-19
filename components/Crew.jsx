import Image from "next/image";
import React from "react";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json";

const Crew = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="w-screen overflow-x-hidden bg-crew-mob md:bg-crew-tab lg:bg-crew-desk bg-center bg-cover bg-no-repeat">
      <div className="lg:pt-[40px] lg:pb-[131px] w-full h-full ">
        <Header />
        <h2 className="w-full flex items-center justify-center md:justify-start md:ml-[38.5px] lg:ml-[166.5px] gap-[18px] lg:gap-[28px] mt-[34px] md:mt-[40px] lg:mt-[76px] text-[16px] md:text-[20px] lg:text-[28px] text-white leading-[19px] md:leading-[24px] lg:leading-[34px] tracking-[2.7px] md:tracking-[3.375px] lg:tracking-[4.725px] font-barlow-condensed">
          <span className="font-bold mix-blend-normal opacity-25">02</span>
          <span>MEET YOUR CREW</span>
        </h2>
        <div className="mt-[32px] w-full flex items-center justify-center">
          <Slider
            {...settings}
            className="w-full flex items-center justify-center relative"
          >
            {data.crew.map(({ images,role,bio, name }) => {
              const image = images.svg;
              return (
                <>
                  <div className="w-full flex items-center justify-center">
                  <img
                    className="w-auto h-[222px]"
                    src={image}
                    alt="crew-image"
                  />
                  </div>
                  <div className="w-[calc(100%-48px)] h-[1px] bg-[#383B4B] mx-[24px]"/>
                  <div className="mt-[74px] font-bellefair w-full">
                    <h3 className="uppercase text-center text-[16px] leading-[18px] mix-blend-normal text-white opacity-50">
                      {role}
                    </h3>
                    <h2 className="text-[24px] uppercase leading-[28px] text-center text-white mt-[8px]">
                      {name}
                    </h2>
                  </div>
                  <p className="font-barlow px-[24px] text-[15px] leading-[25px] text-center pt-[16px] pb-[79px]  text-[#D0D6F9]">
                    {bio}
                  </p>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default Crew;
