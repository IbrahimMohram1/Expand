import React, { useContext, useEffect } from "react";
import { ContextData } from "../Context/ContextData";

export default function SecSection({ image, who, p }) {
  return (
    <>
      <div className="container my-5">
        <div className="m-auto">
          <div className="flex justify-center items-start md:flex-row flex-col gap-x-2 md:gap-y-0 gap-y-3">
            {/* الصورة */}
            <div className="md:w-1/2 my-1 w-full flex ">
              <img
                src={image}
                className="w-full h-auto max-h-full object-cover rounded-xl"
              />
            </div>

            {/* النص */}
            <div className="md:w-1/2 w-full">
              <h1 className="mainColor text-2xl tracking-[1px] my-3">{who}</h1>
              <p className="text-xs leading-5 tracking-[1.5px]">{p}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
