import express from "express";
import Controller from "../controller/Controller.js";

const auth_router = express.Router();

auth_router.post('/api/register', Controller.createaccount)
auth_router.post('/api/login', Controller.login)
auth_router.post('/api/check-login', Controller.Check_Login_Details)

export default auth_router