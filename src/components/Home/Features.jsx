import React from "react";
import { styles } from "../../styles/styles";
import { FaturesImg } from "../../assets/export";
import FeatureAccordion from "./FeatureAccordion";

const Features = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full`} id="features">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 order-2 lg:order-1">
          <img
            src={FaturesImg}
            alt=""
            className="lg:w-[719.49px] lg:h-[719.49px]"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-center order-1 lg:order-2">
          <h1 className="text-[65px] font-extrabold">Features</h1>
          <FeatureAccordion title={"Wide Range of Items"} num="01/"/>
          <FeatureAccordion title={"Secure Transactions"} num="02/"/>
          <FeatureAccordion title={"Flexible Rental Periods"} num="03/"/>
          <FeatureAccordion title={"Instant Booking"} num="04/"/>
          <FeatureAccordion title={"24/7 Customer Support"} num="05/"/>
        </div>
      </div>
    </div>
  );
};

export default Features;
