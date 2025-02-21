import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/export";
import { styles } from "../../styles/styles";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`pt-12 pb-6 flex flex-col gap-y-6 md:gap-y-8 ${styles.paddingHorizontal}`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 lg:px-8 gap-y-6">
        <div className="col-span-12 md:col-span-4 flex justify-start items-center">
          <img src={Logo} alt="" className="h-20" />
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-start items-start lg:items-center gap-y-4">
          <p className="text-xl xl:text-2xl font-semibold leading-[27.72px]">
            Find us on Social Media
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <Link
              to="https://www.facebook.com"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              to="https://www.twitter.com"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              to="https://www.linkedin.com"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col items-start lg:items-end gap-y-4">
          <p className="text-xl font-semibold leading-[23.1px]">
            We’re always happy to help.
          </p>
          <Link
            to="mailto:support@HomeHero.com"
            className={`text-sm font-normal leading-[16.17px]`}
          >
            support@homehero.com
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-center md:py-3 gap-y-3">
        <p className="text-sm font-normal leading-[16.17px] text-center">
          Copyright © 2024 HomeHero. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-x-1">
          <Link className="text-sm font-normal leading-[16.17px]" to={"/"}>
            Terms & Conditions
          </Link>
          <span>/</span>
          <Link className="text-sm font-normal leading-[16.17px]" to={"/"}>
            Privacy Policy
          </Link>
          <span>/</span>
          <Link className="text-sm font-normal leading-[16.17px]" to={"/"}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
