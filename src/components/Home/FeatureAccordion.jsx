import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { styles } from "../../styles/styles";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const FeatureAccordion = ({ title, text, num }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const handleShowAccordion = () => {
    setShowAccordion(!showAccordion);
  };
  return (
    <div className="w-full flex flex-col gap-y-2 border-b py-4">
      <div
        className="w-full flex justify-between items-center cursor-pointer transition-all duration-500"
        onClick={handleShowAccordion}
      >
        <div className="flex items-center gap-6">
          <p className="text-[20px] font-light text-[#717171]">{num}</p>
          <h3 className="text-[20px] font-semibold text-[#717171]">{title}</h3>
        </div>
        <button onClick={handleShowAccordion}>
          {showAccordion ? (
            <div className="border border-[#9924bf] w-[24px] h-[24px] rounded-full flex items-center justify-center">
              <MdOutlineKeyboardArrowUp className="text-sm text-[#9924bf]" />
            </div>
          ) : (
            <div className="border border-[#9924bf] w-[24px] h-[24px] rounded-full flex items-center justify-center">
              <MdOutlineKeyboardArrowDown className=" text-[#9924bf]" />
            </div>
          )}
        </button>
      </div>
      {showAccordion && (
        <div
          className={`transition-all duration-300 text-base font-normal text-[#717171]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus
          ullam distinctio ratione est excepturi esse fugit, temporibus
          possimus! Itaque.
        </div>
      )}
    </div>
  );
};

export default FeatureAccordion;
