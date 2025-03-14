import React, { useContext, useEffect, useState } from "react";
import * as icons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import * as faIcons from "react-icons/fa"; // FontAwesome
import * as mdIcons from "react-icons/md"; // Material Design
import * as fiIcons from "react-icons/fi";
import * as giIcons from "react-icons/gi";
import { ContextData } from "../Context/ContextData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

export default function SwiperServices() {
  const { GetServices, Services } = useContext(ContextData);
  const { id } = useParams(); // جلب ID من ال URL لمعرفة الخدمة النشطة
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        await GetServices();
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [GetServices]);

  const settings = {
    infinite: true,
    autoplay: !id, // إيقاف الـ autoplay لو فيه id
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-5 overflow-hidden">
      <div className="flex justify-center items-center">
        <Slider {...settings}>
          {Services.length > 0 ? (
            Services.map((service) => {
              const IconComponent =
                icons[service.icon] ||
                tbIcons[service.icon] ||
                faIcons[service.icon] ||
                mdIcons[service.icon] ||
                fiIcons[service.icon] ||
                giIcons[service.icon] ||
                faIcons.FaQuestionCircle; // Fallback icon

              const isActive = service.id.toString() === id;

              return (
                <div key={service.id} className="relative">
                  <Link to={`/services/${service.id}`}>
                    <div
                      className={`MainBg text-white p-4 rounded-lg flex flex-col justify-start items-center h-72 shadow-lg mx-2 transition-all duration-300                       }`}
                      style={{
                        backgroundImage: isActive
                          ? `url(${service.image})`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
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

                      {/* Overlay يظهر عند الهوفر */}
                      <div
                        className="absolute inset-0 bg-black/70 rounded-lg flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 text-white text-center"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="flex justify-around flex-col items-center w-full h-full">
                          <p className="text-xs">
                            {service.description
                              .split(" ")
                              .slice(0, 10)
                              .join(" ")}
                          </p>
                          <Link
                            to={`/services/${service.id}`}
                            className="mt-3 bg-white  text-black px-4 py-1 rounded-lg transition duration-300 text-sm text-nowrap"
                          >
                            View Details
                          </Link>
                        </div>
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
