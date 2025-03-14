import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import navLogo from "../../assets/Simplification.png";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Navbar() {
  const [ToggleNav, setToggleNav] = useState(false);

  function toggleNavbar() {
    setToggleNav(!ToggleNav);
  }
  const closeNavbar = () => {
    if (ToggleNav) {
      setToggleNav(false);
    }
  };
  return (
    <nav className="bg-transparent w-5/6 m-auto absolute top-0 z-20 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={navLogo} className="h-10" alt="Logo" />
          </div>
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            ToggleNav ? "block" : "hidden"
          } w-full md:block md:w-[85%] md:bg-transparent bg-[#2C2A61]`}
          id="navbar-default"
        >
          <div className="flex flex-col gap-y-2">
            <div className="border-b-[1px]">
              <ul className="font-normal flex flex-col p-4 md:gap-y-0 gap-y-2 md:p-0 md:flex-row md:space-x-6 rtl:space-x-reverse text-sm justify-end text-white mb-1">
                <li>
                  <p className="flex gap-x-2 items-center">
                    <FaPhoneAlt />
                    <a href="tel:01020181248" className="cursor-pointer">
                      01020181248
                    </a>
                  </p>
                </li>
                <li>
                  <p className="flex gap-x-2 items-center">
                    <FaEnvelope />
                    <a
                      href="mailto:ibrahimmohram7@gmail.com"
                      className="cursor-pointer"
                    >
                      ibrahimmohram7@gmail.com
                    </a>
                  </p>
                </li>
                <div className="flex md:p-0 p-4 gap-x-5 md:gap-x-4 items-center">
                  <TiSocialLinkedin className="text-white text-lg" />
                  <FaInstagram className="text-white text-lg" />
                  <FaXTwitter className="text-white text-lg" />
                </div>
              </ul>
            </div>

            <div>
              <ul className="font-normal flex flex-col p-4 md:p-0 md:flex-row md:space-x-6 rtl:space-x-reverse text-sm">
                <li>
                  <Link
                    onClick={closeNavbar}
                    to="/"
                    className="block px-3 py-2 text-white text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeNavbar}
                    to="about"
                    className="block px-3 py-2 text-white text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeNavbar}
                    to={`/services/1`}
                    className="block px-3 py-2 text-white text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeNavbar}
                    to="Projects"
                    className="block px-3 py-2 text-white text-sm"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
