import React from "react";
import { styles } from "../../styles/styles";
import { HowItWorksImg } from "../../assets/export";

const HowItWorks = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full`} id="howitworks">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-4 justify-center lg:pr-8">
          <h1 className="text-5xl md:text-[65px] font-extrabold">How it Works</h1>
          <div className="flex flex-col gap-y-4 lg:px-6">
            <h2 className="text-[30px] font-semibold">For Renters</h2>
            <p className="text-base font-medium text-[#777777]">
              The Rentalibles experience begins with exploration. Dive into our
              extensive catalog boasting a diverse array of items available for
              rent. Once you've found the perfect fit, booking is a breeze.
              Simply select your desired item, customize your rental period, and
              proceed to secure your rental instantly, all with just a few taps.
              Then, it's time to meet the lender and pick up your item, ready to
              embark on your rental adventure hassle-free.
            </p>
            <h2 className="text-[30px] font-semibold">For Lenders</h2>
            <p className="text-base font-medium text-[#777777]">
              Rentalibles offers a platform to showcase your items and unlock
              earning potential. It all starts with listing your items – upload
              photos, provide detailed descriptions, and set your rental terms
              to attract potential renters. Then, sit back and review rental
              requests at your convenience. With the power to approve bookings,
              you're in control every step of the way. And as your items find
              new homes within your community, you'll be earning extra income
              effortlessly, all while contributing to a more sustainable sharing
              economy
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img
            src={HowItWorksImg}
            alt=""
            className="lg:w-[719.49px] lg:h-[719.49px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
