import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import HeroImage from "../../assets/unsplash_9cCeS9Sg6nU.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center p-5 relative">
      {/* الصورة كخلفية */}
      <div className="w-full h-full absolute inset-0 z-0 brightness-[0.25]">
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
      <div className="absolute md:bottom-5 bottom-9 left-0 right-0 z-10 w-full md:w-[90%] mx-auto">
        <hr className="h-[.75px] bg-slate-200" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2 ">
          <div className="flex items-center gap-x-2 text-white">
            <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1" />
            <p className="text-[20px]">Manufacture & Distribution</p>
          </div>
          <div className="flex items-center gap-x-2 text-white">
            <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1" />
            <p className="text-[20px]">Products</p>
          </div>
          <div className="flex items-center gap-x-2 text-white">
            <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1" />
            <p className="text-[20px]">Install</p>
          </div>
        </div>
      </div>
    </section>
  );
}
