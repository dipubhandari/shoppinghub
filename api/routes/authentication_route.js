import express from "express";
import Controller from "../controller/Controller.js";

const router = express.Router();


router.post('/api/register', Controller.createaccount)
router.post('/api/login', Controller.login)
router.post('/api/check-login', Controller.Check_Login_Details)

export default router