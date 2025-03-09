import React, { useContext, useEffect, useState } from "react";

import HeroSlider from "../HeroSection/HeroSlider";
import image from "../../assets/image1.png";
import image2 from "../../assets/image3.png";
import bgImage from "../../assets/linear.png";
import shunk2 from "../../assets/shunk2.jfif";
import shunk from "../../assets/f8a664f089ef8b9922492351554a44e7.jfif";

import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import { ContextData } from "../Context/ContextData";
import { TbActivityHeartbeat } from "react-icons/tb";

import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import GoalsNumber from "../GoalsNumber/GoalsNumber";
import { Link } from "react-router-dom";

export default function Home() {
  let { expandData, GetData } = useContext(ContextData);

  useEffect(() => {
    GetData();
  }, [expandData]);

  return (
    <>
      <HeroSlider />
      <div className="container">
        <div className=" text-white p-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-6">
          {/* Images Section */}
          <div className="flex items-center justify-center ">
            <img
              src={image2}
              alt="Shipping"
              className="w-40 h-40 md:w-56 md:h-56 rounded-lg shadow-lg"
            />
            <img
              src={image}
              alt="Power Lines"
              className="w-52 h-52 md:w-64 md:h-64 rounded-lg shadow-lg"
            />
          </div>

          {/* Who We Are */}
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "5px 10px",
              backgroundRepeat: "repeat",
            }}
            className="rounded-lg"
          >
            <div className="  max-w-md p-5 ">
              {/* المحتوى */}
              <h2 className="text-2xl font-bold mainColor">Who We Are</h2>
              <p className="mt-2 text-black text-sm">
                We are Expand Trading Co., a Jeddah-based leader since 2015,
                providing innovative, high-quality solutions across electrical,
                safety, energy, and industrial sectors. With a client-first
                approach, we deliver tailored products and services that exceed
                expectations and build long-term partnerships.{" "}
              </p>
              <div className="flex justify-end">
                <Link to={"/about"}>
                  <a className="mainColor font-bold mt-3 inline-block">
                    Discover more →
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="flex justify-center items-center md:flex-row flex-col text-center gap-4 ">
          {expandData.length > 0 ? (
            expandData.map((section, index) => (
              <div key={index} className="md:w-1/2 w-full p-5 shadow-xl">
                <h2 className="mainColor text-xl font-semibold">
                  {section.title}
                </h2>
                <p className="p-3 text-sm">{section.content}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <GoalsNumber />

      <Services />

      <div className="container my-9 mb-16">
        <div className=" w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row gap-y-12 justify-center items-center ">
            <div className="md:w-1/2 w-full">
              <div className="relative w-full max-w-md  right-0 flex justify-center">
                {/* الصورة الكبيرة */}
                <img
                  src={shunk}
                  alt="background"
                  className="md:w-3/4 h-auto rounded-lg w-full "
                />

                {/* الصورة الصغيرة فوقها */}
                <img
                  src={shunk2}
                  alt="foreground"
                  className="absolute top-24 left-28 md:left-32 md:top-24 w-56 md:w-48 lg:w-64 h-auto rounded-lg border-4  border-white shadow-lg"
                />
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              {/* Who We Are */}
              <div
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "5px 10px",
                  backgroundRepeat: "repeat",
                }}
                className="rounded-lg"
              >
                <div className="  max-w-md p-5 ">
                  {/* المحتوى */}
                  <Link to={"/about"}>
                    <h2 className="text-2xl font-bold mainColor">
                      Why Choose Us{" "}
                    </h2>
                  </Link>

                  <p className="mt-2 text-black text-sm">
                    With a legacy of excellence since 2015, Expand Trading Co.
                    delivers tailored solutions that solve challenges, build
                    trust, and drive success. We focus on innovation, quality,
                    and long-term partnerships to meet your unique needs.
                  </p>
                  <div className="flex justify-end">
                    <Link to={"/about"}>
                      <p className="mainColor font-bold mt-3 inline-block">
                        Discover more →
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}
