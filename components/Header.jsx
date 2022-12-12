import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full relative px-[24px] pt-[24px]  flex items-center justify-between'>
        <Image src='/shared/logo.svg' className='md:w-[48px] md:h-[48px]' width={40} height={40} alt='logo'/>
        <Image className='md:hidden' src='/shared/icon-hamburger.svg' width={24} height={21} alt='hamburger-menu'/>
        <div className='hidden absolute right-0 top-0 md:flex gap-[37px] items-center justify-between px-[47px] py-[39px] text-white bg-menu backdrop:blur-menu font-barlow-condensed font-normal text-[14px] leading-[16.8px] tracking-[2.36px]'>
          <span className='link'>
            <Link href='/'>
              HOME
            </Link>
          </span>
          <span className='link'>
            <Link href='/'>
              DESTINATION
            </Link>
          </span>
          <span className='link'>
            <Link href='/'>
              CREW
            </Link>
          </span>
          <span className='link'>
            <Link href='/'>
              TECHNOLOGY
            </Link>
          </span>
        </div>
    </div>
  )
}

export default Header