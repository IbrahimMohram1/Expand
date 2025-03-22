import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import HeroImage from "../../assets/HomeCover.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center p-5 relative">
      {/* الصورة كخلفية */}
      <div className="w-full h-full absolute inset-0 z-0">
        <img
          src={HeroImage} // غير المسار ده لصورة حقيقية
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* النص والأزرار */}
      <div className="w-3/4 mx-auto">
        <div className="relative z-10 flex items-start justify-start h-full">
          <div className="w-full md:w-1/2 lg:w-1/2 text-left text-white">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-4">
              Innovative Solutions Tailored for Your Needs
            </h1>
            <p className="text-base md:text-lg mb-8">
              Expand Trading Co. – Your Trusted Partner in Electrical, Safety,
              Marine, and Logistics Solutions since 2015.
            </p>
            <Link to={"/about"}>
              <button className="bg-[#D74D1E] text-white py-3 px-6 rounded-md hover:bg-[#c6451a] transition duration-300">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* الـ HR والعناصر التحتية */}
      <div className="absolute md:bottom-5 bottom-0 left-0 right-0 z-10 w-full md:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2 p-2 ">
          <div
            className="md:w-1/3 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-start gap-x-2 text-white flex-col">
              <div className="flex flex-row gap-x-2 duration-1000">
                {isHovered ? (
                  <IoIosArrowDown className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                ) : (
                  <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                )}
                <p className="text-[20px]">Manufacture & Distribution</p>
              </div>
              <span
                className={`w-[85%] text-left text-xs transition-all duration-500  ${
                  isHovered ? "h-auto opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, explicabo.
              </span>
            </div>
          </div>
          <div
            className="md:w-1/3 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-start gap-x-2 text-white flex-col">
              <div className="flex flex-row gap-x-2 duration-1000">
                {isHovered ? (
                  <IoIosArrowDown className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                ) : (
                  <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                )}
                <p className="text-[20px]">Products</p>
              </div>
              <span
                className={`w-[85%] text-left text-xs transition-all duration-500  ${
                  isHovered ? "h-auto opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, explicabo.
              </span>
            </div>
          </div>
          <div
            className="md:w-1/3 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-start gap-x-2 text-white flex-col">
              <div className="flex flex-row gap-x-2 duration-1000">
                {isHovered ? (
                  <IoIosArrowDown className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                ) : (
                  <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                )}
                <p className="text-[20px]">Install</p>
              </div>
              <span
                className={`w-[85%] text-left text-xs transition-all duration-500  ${
                  isHovered ? "h-auto opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, explicabo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
