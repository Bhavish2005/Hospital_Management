import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Lifeline Medical Institute"}
        imageUrl={"/Vector1.png"}
      />
      <Biography imageUrl={"/doctorphone.png"} />
    </>
  );
};

export default AboutUs;
