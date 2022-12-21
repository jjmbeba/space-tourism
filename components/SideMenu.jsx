import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setMenuState } from "../slices/menuSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute w-[254px] h-screen py-[33.95px] pl-[32px] pr-[26px] right-0 top-0 bg-menu backdrop-blur-menu">
      <div className="w-full flex items-center justify-end">
        <Image
          onClick={() => dispatch(setMenuState())}
          src="/shared/icon-close.svg"
          width={19}
          height={19}
          alt="close"
        />
      </div>
      <div className="mt-[64px] flex flex-col items-start gap-[32px]">
        <span className="">
          <Link
            onClick={() => dispatch(setMenuState())}
            className="link-text"
            href="/"
          >
            <span className="link-num">00</span>
            <span>HOME</span>
          </Link>
        </span>
        <span className="">
          <Link
            onClick={() => dispatch(setMenuState())}
            className="link-text"
            href="/destination"
          >
            <span className="link-num">01</span>
            <span>DESTINATION</span>
          </Link>
        </span>
        <span className="">
          <Link
            onClick={() => dispatch(setMenuState())}
            className="link-text"
            href="/crew"
          >
            <span className="link-num">02</span>
            <span>CREW</span>
          </Link>
        </span>
        <span className="">
          <Link
            onClick={() => dispatch(setMenuState())}
            className="link-text"
            href="/technology"
          >
            <span className="link-num">03</span>
            <span>TECHNOLOGY</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
