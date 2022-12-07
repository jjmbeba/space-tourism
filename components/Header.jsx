import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between'>
        <Image src='/shared/logo.svg' width={40} height={40} alt='logo'/>
        <Image src='/shared/icon-hamburger.svg' width={24} height={21} alt='hamburger-menu'/>
    </div>
  )
}

export default Header