import express from "express";
import Controller from "../controller/Controller.js";
import OrderController from "../controller/orderController.js";

const order_Route = express.Router();

order_Route.post('/api/order', OrderController.Order)

export default order_Route