import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import HeroImage from "../../assets/unsplash_9cCeS9Sg6nU.png";
import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";
export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center">
      {/* الصورة كخلفية */}
      <div className="w-full h-full absolute inset-0 z-0">
        <img
          src={HeroImage} // غير المسار ده لصورة حقيقية
          alt="Hero Background"
          className="w-full h-full object-cover "
        />
      </div>

      {/* النص والأزرار */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="w-[90%] md:w-[80%] mx-auto my-5">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start text-left gap-y-4 text-white">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight">
              Innovative Solutions Tailored for Your Needs
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Expand Trading Co. – Your Trusted Partner in Electrical, Safety,
              Marine, and Logistics Solutions since 2015.
            </p>
            <button className="bg-[#D74D1E] text-white py-2 px-6 rounded-md hover:bg-[#c6451a] transition duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* الـ HR والعناصر التحتية */}
      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto pb-8">
        <hr className="h-[.75px] bg-slate-200" />
        <div className="flex  md:flex-row justify-between items-center gap-4 mt-4">
          <div className="flex items-center gap-x-2 text-white">
            <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1" />
            <p className="text-sm md:text-base">Manufacture & Distribution</p>
          </div>
          <div className="flex items-center gap-x-2 text-white">
            <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1" />
            <p className="text-sm md:text-base">Products</p>
          </div>
          <div className="flex items-center gap-x-2 text-white">
            <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1" />
            <p className="text-sm md:text-base">Install</p>
          </div>
        </div>
      </div>
    </section>
  );
}
