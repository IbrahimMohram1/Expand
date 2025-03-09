import React, { useEffect } from "react";

import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
import SwiperServices from "../ServicesSwiper/SwiperServices";
import { Link } from "react-router-dom";
export default function Services() {
  let { GetServices, Services } = useContext(ContextData);
  useEffect(() => {
    GetServices();
  }, [Services]);

  return (
    <>
      <div className="container my-5">
        <div className="w-4/5 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="mainColor">Our Services</h2>
            </div>
            <div>
              <Link to={`/services/1`}>
                <p className="mainColor mt-3 text-sm">Discover more →</p>
              </Link>
            </div>
          </div>
          <p className="text-xs">
            From powering homes to securing industries, we deliver tailored
            solutions across electrical, safety, airport systems, marine
            equipment, EV tools, tech innovations, storage, and workshop
            equipment. Each service is crafted with precision to ensure quality,
            reliability, and forward-thinking innovation.
          </p>
        </div>
        <SwiperServices />
      </div>
    </>
  );
}
