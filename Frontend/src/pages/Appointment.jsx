import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={
          "Not Feeling Well, Book Your Appointment Now | LifeLine Medical Institute"
        }
        imageUrl={"/appointment.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
