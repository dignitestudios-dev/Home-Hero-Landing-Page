import React from "react";
import {
  AppStoreImg,
  PlayStoreImg,
  RentNowLines,
  StartRentingNow2,
  starts2,
} from "../../assets/export";
import { Link } from "react-router-dom";

const StartRentingNow = () => {
  return (
    <div
      className={` lg:h-screen py-6 lg:py-8 start-ranting-now-section relative flex z-20 flex-col items-start justify-center my-16 md:mt-24 lg:mt-4`}
    >
      <img src={starts2} alt="stars" className="w-full absolute top-0" />
      <div className="w-full lg:w-[85%] mx-auto bg-black lg:h-[80%] relative rounded-xl py-6">
        <span className="bg-[#9924bf] w-[200px] h-[200px] rounded-full absolute -left-12 -top-10 -z-20 blur-3xl"></span>
        <span className="bg-[#9924bf] w-[200px] h-[200px] rounded-full absolute -right-12 -bottom-10 -z-20 blur-3xl"></span>
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center gap-y-6">
          <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-y-2 lg:gap-y-10 pl-8 pr-6 lg:ps-28">
            <div className="w-[100%] flex flex-col gap-y-6">
              <h1 className="text-white text-5xl lg:text-[48px] font-bold">
                Start Renting Now!
              </h1>
              <p className="text-[18px] font-normal text-white">
                Download the HomeHero app and unlock a world of possibilities.
              </p>
            </div>
            <div className="flex items-center gap-4 z-30">
              <Link to="/" target="_blank">
                <img
                  src={PlayStoreImg}
                  alt=""
                  className="w-[189px] h-[61px] cursor-pointer"
                />
              </Link>
              <Link to="/" target="_blank">
                <img src={AppStoreImg} alt="" className="w-[189px] h-[61px]" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex items-center justify-end">
            <img src={StartRentingNow2} alt="iphone" className="z-30" />
          </div>
        </div>
        <img
          src={RentNowLines}
          alt="stars"
          className="z-20 absolute bottom-0"
        />
      </div>
    </div>
  );
};

export default StartRentingNow;
