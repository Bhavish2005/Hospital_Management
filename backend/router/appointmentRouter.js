import express from "express";
import {
  getALLAppointment,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();
router.post("/newAppointment", isPatientAuthenticated, postAppointment);
router.get("/getAppointments", isAdminAuthenticated, getALLAppointment);
router.put(
  "/updateAppointment/:id",
  isAdminAuthenticated,
  updateAppointmentStatus
);
export default router;
