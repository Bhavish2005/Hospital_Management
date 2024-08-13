import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "8:00 AM- 12:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "8:30 AM- 9:00 PM",
    },
    {
      id: 3,
      day: "Sunday",
      time: "10:00 AM- 10:00 PM",
    },
  ];
  return (
    <>
      {" "}
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="logo1.png" alt="" />
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/"}>About</Link>
            </ul>
          </div>
          <div>
            <h3>Hours</h3>
            {hours.map((element) => {
              return (
                <li key={element.id}>
                  <span>{element.day} : </span>

                  <span>{element.time}</span>
                </li>
              );
            })}
          </div>
          <div>
            <h3>Contact-No.</h3>
            <div>
              <FaPhone />
              <span>+91-8198044848</span>
            </div>
            <div>
              <MdEmail />
              <span>bp2005@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Indraprast,Delhi,India</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
