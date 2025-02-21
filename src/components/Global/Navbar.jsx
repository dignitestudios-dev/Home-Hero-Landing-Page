import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { Logo } from "../../assets/export";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpNav = () => {
    setOpenNav(!openNav);
    alert("eibfeibf");
  };

  return (
    <div
      className={`w-full ${styles.paddingHorizontal} py-6 flex items-center justify-between relative`}
    >
      <div>
        <img src={Logo} alt="" className="z-30 h-20" />
      </div>
      <div className="hidden lg:flex items-center gap-x-12">
        <Link to="/" className="font-medium text-sm text-[#9924bf]">
          Home
        </Link>
        {/* <a href="#features" className="font-medium text-sm">
          Features
        </a>
        <a href="#howitworks" className="font-medium text-sm">
          How it works
        </a> */}
        <a href="#aboutus" className="font-medium text-sm">
          About us
        </a>
        <a href="#contactus" className="font-medium text-sm">
          Contact us
        </a>
      </div>
      <button
        className="text-black text-2xl block lg:hidden z-10"
        onClick={() => setOpenNav((prev) => !prev)}
      >
        <TbMenuDeep />
      </button>
      <div
        className={`w-full h-screen bg-transparent absolute z-50 top-0 right-0 bottom-0 left-0 transition-all duration-300 ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
        onClick={() => setOpenNav((prev) => !prev)}
      >
        <div className="bg-white h-auto w-48 absolute top-16 rounded-2xl right-4 float-end p-4 shadow-2xl">
          <div className="w-full flex flex-col gap-y-4 py-2 ps-1">
            <Link to="/" className="font-medium text-sm text-[#9924bf]">
              Home
            </Link>
            {/* <a href="#features" className="font-medium text-sm">
              Features
            </a>
            <a href="#howitworks" className="font-medium text-sm">
              How it works
            </a> */}
            <a href="#aboutus" className="font-medium text-sm">
              About us
            </a>
            <a href="#contactus" className="font-medium text-sm">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
