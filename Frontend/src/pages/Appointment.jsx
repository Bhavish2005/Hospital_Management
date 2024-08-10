import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={
          "Not Feling Well, Book Your Appointment Now |LifeLine Medical Institute"
        }
        imageUrl={"/appointment-1.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
