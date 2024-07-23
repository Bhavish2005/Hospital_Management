import express from "express"
import { adminRegister, login, patientRegister } from "../controller/userController.js";
const router=express.Router();

router.post('/patient/register',patientRegister);
router.post('/login',login);
router.post('/admin/register',adminRegister);

export default router;