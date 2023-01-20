import express from "express";
import Controller from "../controller/Controller.js";
import OrderController from "../controller/orderController.js";

const order_Route = express.Router();

order_Route.post('/api/order', OrderController.Order)
order_Route.get('/api/orderapi', OrderController.OrderApi)

export default order_Route