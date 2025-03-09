import React, { useContext, useEffect } from "react";
import { ContextData } from "../Context/ContextData";

export default function TrustedBy() {
  let { TrustedBy, TrustedByData } = useContext(ContextData);
  useEffect(() => {
    TrustedBy();
  }, [TrustedByData]);

  return (
    <>
      <div className="w-full bg-[#F0F0F0]  p-2 my-5">
        <h2 className="mainColor text-center text-xl font-semibold tracking-[5px]">
          Trusted by
        </h2>
        <div className="w-3/4 mx-auto py-4">
          <div className="flex justify-center items-center md:flex-row flex-col text-center">
            {TrustedByData.length > 0 ? (
              TrustedByData.map((client, index) => (
                <div
                  key={index}
                  className="md:w-1/6 w-full flex justify-center items-center gap-y-4"
                >
                  <img
                    src={client.image}
                    className="w-1/2 grayscale hover:grayscale-0 "
                  />
                </div>
              ))
            ) : (
              <p>No Clients</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
