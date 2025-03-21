import React from "react";
import { styles } from "../../styles/styles";
import { HeroImg, HeroStars } from "../../assets/export";

const Hero = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} w-full relative py-6 lg:pt-12`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-4 md:gap-y-6 justify-center items-start pt-12 lg:pt-0 lg:pl-8 lg:pr-20">
          <img
            src={HeroStars}
            alt=""
            className="absolute left-0 lg:top-16 -z-10"
          />
          <h1 className="lg:leading-[24px]">
            <span className="text-5xl lg:text-[70px] font-bold">
              Welcome to
            </span>
            <br />
            <span className="text-7xl lg:text-[100px] font-extrabold text-[#9924bf]">
              HOMEHERO
            </span>
          </h1>
          <h2 className="font-semibold text-[24px] text-[#171717]">
            Your Gateway to Limitless Possibilities!
          </h2>
          <p className="font-medium text-sm text-[#818181]">
            Welcome to HomeHero, where finding help meets simplicity. Our
            user-friendly mobile application is designed to revolutionize the
            way people outsource everyday tasks. From home cleaning and laundry
            to handyman services and yard work, HomeHero connects individuals
            with reliable service providers, offering a seamless platform to
            browse, book, and get tasks done effortlessly. Whether you’re a busy
            professional, a homeowner, or someone looking to earn by offering
            services, HomeHero makes it easy, safe, and efficient to get things
            done—because your time matters.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 flex lg:justify-end justify-center">
          <img src={HeroImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
