import React, { useContext, useEffect } from "react";
import MainImage from "../../assets/service.jfif";
import MainSection from "../MainSection/MainSection";
import { ContextData } from "../Context/ContextData";
import SwiperServices from "../ServicesSwiper/SwiperServices";
import { Link, useParams } from "react-router-dom";
export default function Service() {
  let { GetServices, Services } = useContext(ContextData);
  let { id } = useParams();
  const service = Services?.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>; // إذا لم يتم العثور على الخدمة
  }
  useEffect(() => {
    GetServices();
  }, [Services, service]);
  return (
    <>
      <MainSection image={MainImage} text="Services" />

      <h2 className="mainColor text-2xl my-3 text-center">Our Services</h2>

      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6 lg:grid-cols-12">
          {Services.length > 0 ? (
            Services.map((service) => (
              <div
                key={service.id}
                className="text-nowrap flex justify-between items-center"
              >
                <Link to={`/services/${service.id}`}>
                  <p className="text-xs">{service.title}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>No Services Found</p>
          )}
        </div>
      </div>
      <SwiperServices />
      <div className="container my-5">
        <div className="w-[75%] mx-auto">
          <div className="flex justify-center items-stretch md:flex-row flex-col gap-4">
            <div className="md:w-1/2 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg" // جعل الصورة تأخذ الارتفاع الكامل
              />
            </div>
            <div className="md:w-1/2 w-full">
              <div className="h-full">
                {" "}
                {/* جعل العنصر يأخذ الارتفاع الكامل */}
                <h1 className="text-2xl font-bold mb-4 mainColor">
                  {service.title}
                </h1>
                <p className="mb-4 text-sm">{service.description}</p>
                <h2 className="text-lg font-semibold mb-2 mainColor">
                  What We Offer:
                </h2>
                <ul className="list-disc pl-5 text-sm text-nowrap my-3">
                  {service.whatWeOffer.map((item, index) => (
                    <li key={index} className="text-gray-600 my-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
