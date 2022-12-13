import Image from "next/image"
import Header from "../components/Header"
import {Tab} from '@headlessui/react'

const destination = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden bg-dest-mob bg-no-repeat bg-center bg-cover'>
        <Header/>
        <h2 className="w-full flex items-center justify-center gap-[18px] mt-[34px] text-[16px] text-white leading-[19px] tracking-[2.7px] font-barlow-condensed"> 
            <span className="font-bold mix-blend-normal opacity-25">01</span>
            <span>PICK YOUR DESTINATION</span>
        </h2>
        
        <Tab.Group>
        <Tab.Panels>
          <Tab.Panel>
            <div className="w-full flex items-center justify-center pt-[32px]">
              <Image src='/destination/image-moon.webp' width={170} height={170} alt="planet-image"/>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="w-full flex items-center justify-center pt-[32px]">
              <Image src='/destination/image-mars.webp' width={170} height={170} alt="planet-image"/>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="w-full flex items-center justify-center pt-[32px]">
              <Image src='/destination/image-europa.webp' width={170} height={170} alt="planet-image"/>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="w-full flex items-center justify-center pt-[32px]">
              <Image src='/destination/image-titan.webp' width={170} height={170} alt="planet-image"/>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      <Tab.List className='mt-[26px] w-full flex items-center justify-center gap-[27px] font-barlow-condensed text-[14px] leading-[17px] tracking-[2.3625px] text-[#D0D6F9]'>
        <Tab className='tab-title'>MOON</Tab>
        <Tab className='tab-title'>MARS</Tab>
        <Tab className='tab-title'>EUROPA</Tab>
        <Tab className='tab-title'>TITAN</Tab>
      </Tab.List>
      {/* <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels> */}
    </Tab.Group>
    </div>
  )
}

export default destination