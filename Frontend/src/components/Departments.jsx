import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Departments = () => {
  const departments = [
    {
      name: "Radiology",
      imageUrl: "/department/Radiology.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/department/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/department/Neurology.jpg",
    },
    {
      name: "Gynecology",
      imageUrl: "/department/pregenancy.jpg",
    },
    {
      name: "Hepatology",
      imageUrl: "/department/Liver.jpg",
    },
    {
      name: "Nephrology",
      imageUrl: "/department/Kidney.jpg",
    },
    {
      name: "Orthology",
      imageUrl: "/department/Ortho.jpeg",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {departments.map((depart, index) => {
          return (
            <div className="card" key={index}>
              <div className="depart-name">{depart.name}</div>
              <img src={depart.imageUrl} alt={depart.name} />
            </div>
          );
        })}
      </Carousel>
      ;
    </div>
  );
};

export default Departments;
