import Image from "next/image";
import Header from "../components/Header";
import { Tab } from "@headlessui/react";
import data from "../data.json";
import { useState } from "react";

const Destination = () => {
  const [current, setCurrent] = useState("moon");
  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <div className="lg:pb-[131px] w-full lg:pt-[40px] bg-dest-mob md:bg-dest-tab lg:bg-dest-desk bg-no-repeat bg-center bg-cover">
        <Header />
        <h2 className="w-full flex items-center justify-center md:justify-start md:ml-[38.5px] lg:ml-[166.5px] gap-[18px] lg:gap-[28px] mt-[34px] md:mt-[40px] lg:mt-[76px] text-[16px] md:text-[20px] lg:text-[28px] text-white leading-[19px] md:leading-[24px] lg:leading-[34px] tracking-[2.7px] md:tracking-[3.375px] lg:tracking-[4.725px] font-barlow-condensed">
          <span className="font-bold mix-blend-normal opacity-25">01</span>
          <span>PICK YOUR DESTINATION</span>
        </h2>
        <div className="lg:flex items-center justify-center gap-[157px] lg:pt-[64px]">
          <div>
            <div className="w-full flex items-center justify-center pt-[32px] md:pt-[60px] lg:pt-0">
              <Image
                className="md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
                priority
                src={`/destination/image-${current}.png`}
                width={170}
                height={170}
                alt="planet-image"
              />
            </div>
          </div>
          <div>
            <Tab.Group>
              <Tab.List className="mt-[26px] md:mt-[53px] w-full flex items-center justify-center lg:justify-start gap-[27px] md:gap-[36px] font-barlow-condensed text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] tracking-[2.3625px] md:tracking-[2.7px] text-[#D0D6F9]">
                {data.destinations.map(({ name }) => (
                  <Tab
                    onClick={(e) => setCurrent(name.toLowerCase())}
                    key={name}
                    className="tab-title"
                  >
                    {name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {data.destinations.map(
                  ({ name, description, distance, travel }) => (
                    <Tab.Panel key={name}>
                      <h2 className="font-bellefair text-[56px] md:text-[80px] lg:text-[100px] leading-[64px] md:leading-[92px] lg:leading-[115px] text-center lg:text-left mt-[20px] md:mt-[32px] lg:mt-[37px] uppercase text-white">
                        {name}
                      </h2>
                      <p className="mx-[24px] lg:max-w-[444px] md:mx-[98px] lg:mx-0 mt-[1px] md:mt-[8px] pb-[32px] md:pb-[49px] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[28px] lg:leading-[32px] text-[#D0D6F9] font-barlow text-center lg:text-left border border-transparent border-solid border-b-[#383B4B]">
                        {description}
                      </p>
                      <div className="md:mt-[49px] md:pb-[62px] md:flex items-center justify-center lg:gap-[79px] lg:justify-start px-[65.5px] lg:px-0">
                        <div className="mt-[32px] md:mt-0 w-full flex flex-col items-center lg:items-start justify-center">
                          <h3 className="font-barlow-condensed text-[14px] leading-[17px] tracking-[2.3625px] text-[#D0D6F9]">
                            AVG. DISTANCE
                          </h3>
                          <span className="uppercase mt-[12px] text-[28px] leading-[32px] font-bellefair text-white">
                            {distance}
                          </span>
                        </div>
                        <div className="mt-[32px] md:mt-0 pb-[58px] md:pb-0 w-full flex flex-col items-center lg:items-start justify-center">
                          <h3 className="font-barlow-condensed text-[14px] leading-[17px] tracking-[2.3625px] text-[#D0D6F9]">
                            EST. TRAVEL TIME
                          </h3>
                          <span className="uppercase mt-[12px] text-[28px] leading-[32px] font-bellefair text-white">
                            {travel}
                          </span>
                        </div>
                      </div>
                    </Tab.Panel>
                  )
                )}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
