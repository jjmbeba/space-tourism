import Image from "next/image"
import Header from "../components/Header"
import {Tab} from '@headlessui/react'
import data from '../data.json'
import { useState } from "react"

const destination = () => {
  const [current, setCurrent] = useState("moon");
  return (
    <div className='h-screen w-screen overflow-x-hidden bg-dest-mob bg-no-repeat bg-center bg-cover'>
        <Header/>
        <h2 className="w-full flex items-center justify-center gap-[18px] mt-[34px] text-[16px] text-white leading-[19px] tracking-[2.7px] font-barlow-condensed"> 
            <span className="font-bold mix-blend-normal opacity-25">01</span>
            <span>PICK YOUR DESTINATION</span>
        </h2>
        
        <Tab.Group>
        <div className="w-full flex items-center justify-center pt-[32px]">
          <Image priority src={`/destination/image-${current}.png`} width={170} height={170} alt="planet-image"/>
        </div>
      <Tab.List className='mt-[26px] w-full flex items-center justify-center gap-[27px] font-barlow-condensed text-[14px] leading-[17px] tracking-[2.3625px] text-[#D0D6F9]'>
        {
          data.destinations.map(({name}) => (
            <Tab onClick={(e) => setCurrent(name.toLowerCase())} key={name} className='tab-title'>
              {name}
            </Tab>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {
          data.destinations.map((({name, description, distance, travel}) => (
            <Tab.Panel key={name}>
              <h2 className="font-bellefair text-[56px] leading-[64px] text-center mt-20 uppercase text-white">{name}</h2>
              <p className="mx-[24px] mt-[1px] pb-[32px] text-[15px] leading-[25px] text-[#D0D6F9] font-barlow text-center border border-transparent border-solid border-b-[#383B4B]">
                {description}
              </p>
              <div className="mt-[32px] w-full flex flex-col items-center justify-center">
                <h3 className="font-barlow-condensed text-[14px] leading-[17px] tracking-[2.3625px] text-[#D0D6F9]">AVG. DISTANCE</h3>
                <span className="uppercase mt-[12px] text-[28px] leading-[32px] font-bellefair text-white">{distance}</span>
              </div>
              <div className="mt-[32px] pb-[58px] w-full flex flex-col items-center justify-center">
                <h3 className="font-barlow-condensed text-[14px] leading-[17px] tracking-[2.3625px] text-[#D0D6F9]">EST. TRAVEL TIME</h3>
                <span className="uppercase mt-[12px] text-[28px] leading-[32px] font-bellefair text-white">{travel}</span>
              </div>
            </Tab.Panel>
          )))
        }
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default destination