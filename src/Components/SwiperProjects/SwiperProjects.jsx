import React, { useContext, useEffect } from "react";
import { ContextData } from "../Context/ContextData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SwiperProjects() {
  let { GetPrjocts, Projects } = useContext(ContextData);

  useEffect(() => {
    GetPrjocts();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <Swiper
            className="my-5 overflow-hidden"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            autoplay={{ delay: 5000 }}
          >
            {Projects.length > 0 ? (
              Projects.map((Project) => {
                return (
                  <SwiperSlide key={Project.id}>
                    {" "}
                    {/* عرض كل عنصر بنسبة 20% */}
                    <div
                      className="relative rounded-lg overflow-hidden h-72 shadow-lg"
                      style={{
                        backgroundImage: `url(${Project.image})`, // استخدام الصورة من الـ JSON
                        backgroundSize: "cover", // تغطية الخلفية بالكامل
                        backgroundPosition: "center", // توسيط الصورة
                      }}
                    >
                      {/* النص فوق الصورة */}
                      <div className="absolute top-0 left-0 bottom-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center flex justify-center items-center">
                        <p className="text-lg font-semibold V-Text">
                          {Project.name}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <p>No Services Found</p>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
