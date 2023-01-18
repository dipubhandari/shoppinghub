import express from "express";
import Controller from "../controller/Controller.js";

const auth_route = express.Router();

auth_route.post('/api/register', Controller.createaccount)
auth_route.post('/api/login', Controller.login)
auth_route.post('/api/check-login', Controller.Check_Login_Details)

export default auth_route