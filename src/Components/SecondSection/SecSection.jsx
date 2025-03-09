import React, { useContext, useEffect } from "react";
import { ContextData } from "../Context/ContextData";

export default function SecSection({ image, who, p }) {
  return (
    <>
      <div className="container my-5">
        <div className=" m-auto ">
          <div className="flex justify-center items-start md:flex-row flex-col  gap-x-2">
            <div className="w-1/2 my-1 ">
              <img src={image} className=" w-full  h-screen rounded-xl" />
            </div>

            <div className="w-1/2 ">
              <h1 className="mainColor text-2xl tracking-[1px] my-3 ">{who}</h1>

              <p className="text-xs leading-5 tracking-[1.5px] ">{p}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
