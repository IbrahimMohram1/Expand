import React from "react";
import image from "../../assets/footerImage.png";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
export default function Footer() {
  return (
    <>
      <section className="bg-[#2C2A61] p-5 ">
        <div className="container">
          <div className=" m-auto">
            <div className="flex md:justify-around items-center md:flex-row flex-col text-white md:gap-x-10  justify-start text-center mx-auto">
              <div className="md:w-1/3 w-full flex justify-center ">
                <img src={image} className="h-16" />
              </div>
              <div className="md:w-1/3 w-full flex justify-start items-center flex-col  ">
                <div className="flex md:justify-start items-center my-2 gap-x-3 justify-center ">
                  <div className="w-6 h-6 rounded-full bg-white text-black text-xs flex justify-center items-center">
                    <FiPhone />
                  </div>
                  <p>+996 12 692 4440</p>
                </div>
                <div className="flex md:justify-start items-center my-2 gap-x-3 justify-center">
                  <div className="w-6 h-6 rounded-full bg-white text-black text-xs flex justify-center items-center">
                    <HiOutlineMail />
                  </div>{" "}
                  <p>info@expand.com</p>
                </div>
              </div>
              <div className="md:w-1/3 w-full ">
                <ul className="flex justify-around md:flex-row flex-col md:gap-x-5 gap-y-2 text-nowrap">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
