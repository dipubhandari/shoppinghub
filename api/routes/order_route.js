import express from "express";
import Controller from "../controller/Controller.js";

const order_Route = express.Router();

order_Route.post('/api/order', Controller.Order)

export default order_Route