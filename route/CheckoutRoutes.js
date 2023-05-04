import express from "express";
import {checkoutList, makeCheckout} from "../controller/Checkout/CheckoutController.js";

const CheckoutRoutes = express.Router()

CheckoutRoutes.post('/add', makeCheckout)

CheckoutRoutes.post('/list', checkoutList)

export default CheckoutRoutes
