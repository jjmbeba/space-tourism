import React from 'react'
import ExploreButton from './ExploreButton'
import Header from './Header'
import Headings from './Headings'

const Homepage = () => {
  return (
    <div className='pt-[24px] px-[24px] h-full w-full bg-home bg-no-repeat bg-center bg-cover'>
        <Header/>
        <Headings/>
        <p className='font-normal text-[15px] leading-[25px] text-center text-[#D0D6F9] font-barlow'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>  
        <ExploreButton/>
    </div>
  )
}

export default Homepage