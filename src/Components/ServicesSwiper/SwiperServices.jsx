import React, { useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as icons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import * as faIcons from "react-icons/fa"; // FontAwesome
import * as mdIcons from "react-icons/md"; // Material Design
import * as fiIcons from "react-icons/fi";
import * as giIcons from "react-icons/gi";
import { ContextData } from "../Context/ContextData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "swiper/css";
import {
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function SwiperServices() {
  let { GetServices, Services } = useContext(ContextData);
  const swiperRef = useRef(null);

  useEffect(() => {
    GetServices();
  }, []);
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "100px", // هذا يضيف مسافة بين العناصر

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto my-5">
      <div className=" flex justify-center items-center ">
        <Slider {...settings}>
          {Services.length > 0 ? (
            Services.map((service) => {
              const IconComponent =
                icons[service.icon] ||
                tbIcons[service.icon] ||
                faIcons[service.icon] ||
                mdIcons[service.icon] ||
                fiIcons[service.icon] ||
                giIcons[service.icon];
              return (
                <div key={service.id}>
                  {" "}
                  <Link to={`/services/${service.id}`}>
                    <div className="MainBg text-white p-4 rounded-lg flex flex-col justify-start items-center h-72 shadow-lg mx-2">
                      <div className="mt-3">
                        {IconComponent && (
                          <IconComponent className="text-2xl" />
                        )}
                      </div>
                      <div className="mt-5">
                        <p className="mt-4 text-lg font-semibold V-Text">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No Services Found</p>
          )}
        </Slider>
      </div>
    </div>
  );
}
