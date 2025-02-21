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
            At HomeHero, we’re revolutionizing the way people access essential
            home services by connecting users with trusted service providers in
            a seamless, community-driven marketplace. Our mission is to make
            home maintenance effortless, affordable, and reliable—whether it’s
            laundry, dishwashing, cleaning, or other household tasks.
            <br />
            <br />
            With HomeHero, users can easily post their service needs, and
            skilled professionals can accept requests, ensuring fast,
            high-quality assistance whenever it’s needed. By bridging the gap
            between those who need help and those who offer it, we’re not just
            simplifying chores—we’re creating opportunities, empowering local
            service providers, and fostering a culture of convenience and trust.
            <br />
            <br />
            Join HomeHero today and experience a smarter, hassle-free way to
            keep your home running smoothly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
