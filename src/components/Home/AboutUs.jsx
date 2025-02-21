import React from "react";
import { AboutUsImg } from "../../assets/export";
import { styles } from "../../styles/styles";

const AboutUs = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full`} id="aboutus">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 order-2 lg:order-1">
          <img src={AboutUsImg} alt="" className="w-full" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-4 justify-center lg:pr-8 order-1 lg:order-2">
          <h1 className="text-5xl md:text-[65px] font-extrabold">About us</h1>
          <p className="text-base font-medium text-[#777777]">
            At HomeHero, we’re dedicated to building a community-driven
            marketplace where convenience meets sustainability. Our mission is
            to redefine access to everyday essentials, making it easier for
            people to rent what they need without the hassle of ownership. By
            fostering a culture of sharing, we aim to reduce waste, promote
            efficiency, and connect individuals in a way that benefits both
            their wallets and the environment. With HomeHero, renting becomes
            more than just a service—it’s a smarter, more sustainable way of
            living.
            <br />
            <br />
            Our mission is to make renting convenient, affordable, and
            sustainable for everyone, empowering individuals and businesses
            alike to maximize the utility of their belongings while minimizing
            waste. Join us in building a future where access trumps ownership,
            and together, let's shape a more sustainable and inclusive world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
