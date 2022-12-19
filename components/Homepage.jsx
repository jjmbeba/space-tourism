import React from "react";
import ExploreButton from "./ExploreButton";
import Header from "./Header";
import Headings from "./Headings";

const Homepage = () => {
  return (
    <div className="lg:pb-[131px] w-full lg:pt-[40px] bg-home-mob md:bg-home-tab lg:bg-home-desk bg-no-repeat bg-center bg-cover">
      <Header />
      <div className="lg:flex items-end justify-between">
        <div>
          <Headings />
          <p className="font-normal text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[28px] lg:leading-[32px] text-center text-[#D0D6F9] px-[24px] md:px-[162px] md:mt-[24px] font-barlow">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <ExploreButton />
      </div>
    </div>
  );
};

export default Homepage;
