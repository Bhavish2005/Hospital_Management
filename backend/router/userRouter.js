import express from "express"
import { adminRegister, getAllDoctors, getUserDetails, login, logout, patientRegister } from "../controller/userController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";
const router=express.Router();

router.post('/patient/register',patientRegister);
router.post('/login',login);
router.post('/admin/register',isAdminAuthenticated,adminRegister);
router.get("/doctors",getAllDoctors);
router.get("/admin/me",isAdminAuthenticated,getUserDetails);
router.get("/patient/me",isPatientAuthenticated,getUserDetails);
router.get("/admin/logout",isAdminAuthenticated,logout);
export default router;