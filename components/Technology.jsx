import Image from "next/image";
import React, { useState } from "react";
import Header from "./Header";
import { Tab } from "@headlessui/react";
import data from "../data.json";

const Technology = () => {
  const { technology } = data;
  const [current, setCurrent] = useState(0);
  return (
    <main className="w-screen h-screen overflow-x-hidden bg-tech-mob md:bg-tech-tab lg:bg-tech-desk bg-center bg-cover bg-no-repeat">
      <div className="h-full w-full lg:pt-[40px]">
        <Header />
        <h2 className="w-full flex items-center justify-center md:justify-start md:ml-[38.5px] lg:ml-[166.5px] gap-[18px] lg:gap-[28px] mt-[34px] md:mt-[40px] lg:mt-[76px] text-[16px] md:text-[20px] lg:text-[28px] text-white leading-[19px] md:leading-[24px] lg:leading-[34px] tracking-[2.7px] md:tracking-[3.375px] lg:tracking-[4.725px] font-barlow-condensed">
          <span className="font-bold mix-blend-normal opacity-25">03</span>
          <span>SPACE LAUNCH 101</span>
        </h2>
        <div className="mt-[32px] w-full">
          <Image
            src={technology[current].images.landscape}
            width={375}
            height={170}
            alt="space-image"
          />
        </div>
        <Tab.Group>
          <Tab.List className="w-full font-bellefair px-[24px] mt-[34px] flex items-center justify-center gap-[16px]">
            <Tab onClick={() => setCurrent(0)} className="tech-tab">1</Tab>
            <Tab onClick={() => setCurrent(1)} className="tech-tab">2</Tab>
            <Tab onClick={() => setCurrent(2)} className="tech-tab">3</Tab>
          </Tab.List>
          <Tab.Panels>
            {technology.map(({name, description}) => (
              <Tab.Panel className="w-full flex flex-col items-center justify-center mt-[26px]">
                <h3 className="font-barlow-condensed text-[14px] leading-[16.8px] tracking-[2.36px] text-[#D0D6F9]">
                  THE TERMINOLOGY…
                </h3>
                <h2 className="mt-[9px] font-bellefair text-[24px] leading-[28px] uppercase text-white">
                  {name}
                </h2>
                <p className="w-full px-[24px] pt-[16px] pb-[56px] text-[15px] leading-[25px] text-center font-barlow text-[#D0D6F9]">
                  {description}
                </p>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
};

export default Technology;
