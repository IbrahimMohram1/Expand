import React, { useContext, useEffect } from "react";
import MainImage from "../../assets/serviceBackground.jfif";
import MainSection from "../MainSection/MainSection";
import { ContextData } from "../Context/ContextData";
import SwiperServices from "../ServicesSwiper/SwiperServices";
import { Link, useParams } from "react-router-dom";
export default function Service() {
  let { GetServices, Services } = useContext(ContextData);
  let { id } = useParams();
  const service = Services.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found!</div>; // إذا لم يتم العثور على الخدمة
  }
  useEffect(() => {
    GetServices();
  }, [id, service]);
  return (
    <>
      <MainSection image={MainImage} text="Services" />

      <h2 className="mainColor text-2xl my-3 text-center">Our Services</h2>

      <div className="w-[85%] mx-auto">
        <div className="flex justify-center md:flex-row  flex-col  text-center flex-wrap">
          {Services.length > 0 ? (
            Services.map((service) => (
              <Link to={`/services/${service.id}`} key={service.id}>
                <div className="md:w-full mx-2 my-2 text-nowrap  flex-wrap flex justify-center items-center">
                  <p className="text-xs text-center">{service.title}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No Services Found </p>
          )}
        </div>
      </div>
      <SwiperServices />
      <div className="container my-5">
        <div className=" w-full mx-auto">
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
                {/* التحقق إذا كان whatWeOffer يحتوي على عناصر بها خاصية name (يعني أنها متعددة وليست مجرد قائمة بسيطة) */}
                {service.whatWeOffer.length > 0 &&
                service.whatWeOffer[0].name ? (
                  // إذا كانت متعددة (مثل RESIDENTIAL + COMMERCIAL) نعرضها بجانب بعضها
                  <div className="flex flex-wrap gap-4">
                    {service.whatWeOffer.map((offer, index) => (
                      <div key={index} className="flex-1 min-w-[200px]">
                        <h3 className="font-sm text-nowrap mainColor mb-2">
                          {offer.name}
                        </h3>
                        <ul className="list-disc pl-5 md:text-sm text-xs my-3">
                          {offer.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 my-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  // إذا كانت قائمة بسيطة نعرضها تحت بعض
                  <ul className="list-disc pl-5 md:text-sm text-xs my-3">
                    {service.whatWeOffer.map((item, index) => (
                      <li key={index} className="text-gray-600 my-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
