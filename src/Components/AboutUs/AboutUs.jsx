import React, { useContext } from "react";
import MainImage from "../../assets/AboutUs.jfif";
import MainSection from "../MainSection/MainSection";
import imageShip from "../../assets/image1.png";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";
import GoalsNumber from "../GoalsNumber/GoalsNumber";
import TrustedBy from "../TrustedBy/TrustedBy";
import SecSection from "../SecondSection/SecSection";
import Mission from "../MissionAndVission/Mission";
export default function AboutUs() {
  return (
    <>
      <MainSection image={MainImage} text="About Us" />
      <Mission />
      <SecSection
        image={imageShip}
        who={"Who We Are"}
        p={
          <>
            We are Expand Trading Co., a Jeddah-based leader since 2015,
            providing innovative, high-quality solutions across electrical,
            safety, energy, and industrial sectors. With a client-first
            approach, we deliver tailored products and services that exceed
            expectations and build long-term partnerships.
            <br />
            <br />
            Over the years, we have earned a reputation for reliability and
            innovation, offering expertise across various industries. Our focus
            is on delivering customized solutions that address our clients’
            needs efficiently and effectively. From advanced technologies to
            seamless installations, we ensure exceptional quality and service.
            <br />
            <br />
            By choosing Expand Trading Co., you’re partnering with a company
            dedicated to your success, providing sustainable and transformative
            results.
            <br />
            <br />
            At Expand Trading Co., we are not just service providers — we are
            your partners in progress. Our commitment to building lasting
            relationships and delivering value at every stage ensures that we
            remain a trusted choice for businesses seeking excellence and
            innovation. Together, we achieve more.
          </>
        }
      />

      <GoalsNumber />

      <TrustedBy />
    </>
  );
}
