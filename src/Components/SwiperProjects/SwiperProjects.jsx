import React, { useContext, useEffect, useRef, useState } from "react";
import { ContextData } from "../Context/ContextData";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import Rarrow from "../../assets/RightArrow.png";
import Larrow from "../../assets/LeftArrow.png";

export default function ReactSlickProjects() {
  const { GetPrjocts, Projects } = useContext(ContextData);
  const { id } = useParams(); // الحصول على الـ id من الـ URL
  const [initialSlide, setInitialSlide] = useState(0); // تحديد الشريحة النشطة
  const sliderProjectsRef = useRef(null);
  const isMediumOrLarger = useMediaQuery({ query: "(min-width: 768px)" }); // md breakpoint في TailwindCSS

  useEffect(() => {
    GetPrjocts();
  }, []);

  // تحديد الشريحة النشطة بناءً على الـ id
  useEffect(() => {
    if (Projects.length > 0 && id) {
      const index = Projects.findIndex(
        (project) => project.id.toString() === id,
      );
      if (index !== -1) {
        setInitialSlide(index);
        if (sliderProjectsRef.current) {
          sliderProjectsRef.current.slickGoTo(index); // تحديث الـ Swiper ليركز على الـ slide الصحيحة
        }
      }
    }
  }, [id]);

  // تحديث عرض الشرائح بناءً على الشريحة النشطة
  useEffect(() => {
    if (
      isMediumOrLarger &&
      sliderProjectsRef.current &&
      Projects.length > 0 &&
      id
    ) {
      setTimeout(() => {
        const slides = document.querySelectorAll(".slick-slide");

        slides.forEach((slide) => {
          if (slide.dataset.originalWidth) {
            slide.style.width = `${slide.dataset.originalWidth}px`;
          }
        });

        const serviceIndex = Projects.findIndex(
          (project) => project.id.toString() === id,
        );
        const activeSlideIndex = serviceIndex;

        const targetSlide = document.querySelector(
          `.slick-slide[data-index="${activeSlideIndex}"]`,
        );

        if (targetSlide) {
          const computedStyle = window.getComputedStyle(targetSlide);
          const currentWidth = parseFloat(computedStyle.width);

          if (!targetSlide.dataset.originalWidth) {
            targetSlide.dataset.originalWidth = currentWidth;
          }

          targetSlide.style.width = `${currentWidth * 2.2}px`;
        }
      }, 500);
    }
  }, [id, Projects, isMediumOrLarger]);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        {/* تصميم الشيفرون - سهمين رمادي وسهم برتقالي */}
        <img
          src={Rarrow}
          alt="Next Arrow"
          style={{
            width: "50px",
            height: "20px",
          }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        {/* تصميم الشيفرون - سهمين رمادي وسهم برتقالي */}
        <img
          src={Larrow}
          alt="Prev Arrow"
          style={{
            width: "50px",
            height: "20px",
          }}
        />
      </div>
    );
  }

  // إعدادات React Slick
  const settings = {
    dots: false, // إخفاء النقاط
    infinite: true, // تمرير لا نهائي
    slidesToShow: 5, // عدد الشرائح المعروضة
    slidesToScroll: 1, // عدد الشرائح التي يتم تمريرها
    centerMode: true, // توسيط الشريحة النشطة
    centerPadding: "40px", // إزالة الحشو حول الشريحة النشطة
    initialSlide: initialSlide,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, // تحديد الشريحة النشطة عند التحميل
    responsive: [
      {
        breakpoint: 1024, // إعدادات للشاشات الكبيرة
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 640, // إعدادات للشاشات الصغيرة
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto ">
        <div className="relative  rounded-lg">
          <Slider ref={sliderProjectsRef} {...settings}>
            {Projects.length > 0 ? (
              Projects.map((Project) => {
                return (
                  <div id={Project.id} key={Project.id} className={`relative`}>
                    <div
                      className="rounded-lg overflow-hidden h-72 shadow-lg"
                      style={{
                        backgroundImage: `url(${Project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute p-5 top-0 left-0 bottom-0 right-0  bg-black bg-opacity-50 text-white text-center flex justify-center items-center">
                        <p className="text-lg font-semibold V-Text">
                          {Project?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No Projects Found</p>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}
