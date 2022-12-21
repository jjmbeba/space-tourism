import Image from "next/image";
import React from "react";
import Header from "./Header";
import { Tab } from "@headlessui/react";

const Technology = () => {
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
            src="/technology/image-launch-vehicle-landscape.jpg"
            width={375}
            height={170}
            alt="space-image"
          />
        </div>
        <Tab.Group className='w-full font-bellefair px-[24px] mt-[34px] flex items-center justify-center gap-[16px]'>
          <Tab.List>
            <Tab className='tech-tab'>1</Tab>
            <Tab className='tech-tab'>2</Tab>
            <Tab className='tech-tab'>3</Tab>
          </Tab.List>
          {/* <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels> */}
        </Tab.Group>
      </div>
    </main>
  );
};

export default Technology;
