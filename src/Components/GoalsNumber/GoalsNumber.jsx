import React, { useContext } from "react";
import counterImage from "../../assets/Counter.jpg";
import * as icons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";
export default function GoalsNumber() {
  let { GetCounter, CounterData } = useContext(ContextData);
  useEffect(() => {
    GetCounter();
  }, []);
  return (
    <>
      <div
        className="relative w-full h-100 md:h-64 bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${counterImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-xl md:text-2xl font-bold">
            Our Goals in <span className="text-orange-500">Numbers</span>
          </h2>
        </div>
        <div className="w-full h-full grid mt-24 md:mt-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center text-center bg-black bg-opacity-60 px-5 py-5 ">
          {/* Item 1 */}

          {CounterData.length > 0 ? (
            CounterData.map((item, index) => {
              const IconComponent = icons[item.icon] || tbIcons[item.icon]; // تحويل اسم الأيقونة إلى مكون
              return (
                <div key={index} className="text-center p-4 text-2xl">
                  {IconComponent && (
                    <IconComponent className=" ml-10 md:ml-16 text-center flex justify-center" />
                  )}
                  <p className="text-xl md:text-2xl font-bold">{item.value}</p>
                  <p className="text-sm md:text-base">{item.label}</p>
                </div>
              );
            })
          ) : (
            <p>Loading...........</p>
          )}
        </div>
      </div>
    </>
  );
}
