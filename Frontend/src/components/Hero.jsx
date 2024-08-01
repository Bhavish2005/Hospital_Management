import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lifeline Medical Institute is a state of Art Facility dedicated to
          providing comprehensive healthcare services with Compassion and
          Expertise .our Team of Skilled Professionalls is commited to
          delivering Personalized care tailored to each Patient's Roots.At
          Lifeline Healthcare, We prioritize your well being, nesuring a
          haronious journey towards optimal Health and Wellness
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
