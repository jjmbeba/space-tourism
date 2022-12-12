import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full relative px-[24px] pt-[24px] lg:pt-[0px] flex items-center justify-between'>
        <Image src='/shared/logo.svg' className='md:w-[48px] md:h-[48px]' width={40} height={40} alt='logo'/>
        <Image className='md:hidden' src='/shared/icon-hamburger.svg' width={24} height={21} alt='hamburger-menu'/>
        <div className='hidden absolute before:hidden lg:before:block before:content-[""] before:absolute before:mix-blend-normal before:opacity-25 before:-left-[443px] before:w-[473px] before:h-[1px] before:bg-white right-0 top-0 md:top-[50%] translate-y-[-50%]  md:flex gap-[37px] items-center justify-between px-[47px] lg:px-0 lg:pl-[123px] lg:pr-[165px] py-[39px] text-white bg-menu backdrop-blur-menu font-barlow-condensed font-normal text-[14px] leading-[16.8px] tracking-[2.36px]'>
          <span className='link'>
            <Link className='link-text' href='/'>
              <span className='link-num'>00</span>
              <span>HOME</span>
            </Link>
          </span>
          <span className='link'>
            <Link className='link-text' href='/'>
              <span className='link-num'>01</span>
              <span>DESTINATION</span>
            </Link>
          </span>
          <span className='link'>
            <Link className='link-text' href='/'>
              <span className='link-num'>02</span>
              <span>CREW</span>
            </Link>
          </span>
          <span className='link'>
            <Link className='link-text' href='/'>
              <span className='link-num'>03</span>
             `<span>TECHNOLOGY</span>
            </Link>
          </span>
        </div>
    </div>
  )
}

export default Header