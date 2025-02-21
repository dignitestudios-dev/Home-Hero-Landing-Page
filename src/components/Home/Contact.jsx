import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setData((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("contact form >> ", data);

    if (!data.name || !data.phone || !data.email || !data.message) {
      alert("Please fill all the fields");
    } else {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      console.log("res >> ", res);

      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="w-full" id="contactus">
      <div className="mx-auto w-full grid grid-cols-12 h-auto md:h-[653px]">
        {/* left side */}
        <div className="col-span-12 md:col-span-6 b-black h-full bg-[#F9FAFA] flex flex-col gap-y-10 py-20 px-4 md:px-8 lg:px-40">
          <div className="flex flex-col gap-y-6">
            <h2 className="font-medium text-[32px] leading-[35px] text-[#9924bf]">
              Let’s Connect and <br /> Create Together!
            </h2>
            <p className="text-sm font-normal text-black leading-[21px]">
              Reach out to us, We'd love to hear from you!
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium  leading-[24px]">Our Office</p>
            <div className="flex items-center gap-x-2">
              <MdLocationOn className="text-3xl" />
              <span className="text-[#515151] text-sm font-normal leading-[21px]">
                HomeHero Headquarters: 123 Rental Street Shareville, Rentopia
                RNT 4567, United Rentals
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium ">Email</p>
            <div className="flex items-center gap-x-2">
              <IoMail className="text-xl" />
              <span className="text-[#515151] text-sm font-normal leading-[21px]">
                support@homehero.com
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium ">Phone</p>
            <div className="flex items-center gap-x-2">
              <BiSolidPhoneCall className="text-xl" />
              <span className="text-[#515151] text-sm font-normal leading-[21px]">
                123-456-7890
              </span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-12 md:col-span-6 h-full flex flex-col justify-center items-start gap-y-8 px-4 md:px-8 lg:px-24 py-6 md:py-0">
          <h2 className="text-black text-[32px] font-semibold leading-[39px]">
            Closer Than a Click Away
          </h2>
          <form
            onSubmit={handleOnSubmit}
            className="w-full flex flex-col justify-center items-start gap-y-4"
          >
            <div className="w-full">
              <label htmlFor="name" className="text-sm font-normal">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g John"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-md font-normal">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g John@gmail.com"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="text-md font-normal">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={data.phone}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g 0491 570 156"
              />
            </div>
            <div className="w-full">
              <label htmlFor="message" className="text-md font-normal">
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                value={data.message}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="Enter your message here"
              />
            </div>
            <div className="pt-3">
              <button
                type="submit"
                className="w-[170px] h-[60px] text-white bg-[#9924bf] text-base font-medium rounded-full leading-[24px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
