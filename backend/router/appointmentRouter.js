import express from "express";
import {
  deleteAnAppointment,
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
router.get("/getAppointment", isAdminAuthenticated, getALLAppointment);
router.put(
  "/updateAppointment/:id",
  isAdminAuthenticated,
  updateAppointmentStatus
);
router.delete(
  "/deleteAppointment/:id",
  isAdminAuthenticated,
  deleteAnAppointment
);
export default router;
