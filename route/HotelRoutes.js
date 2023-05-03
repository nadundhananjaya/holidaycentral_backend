import express from "express";
import {AddHotel, HotelList, RemoveHotel, UpdateHotel} from "../controller/Hotel/HotelController.js";

const HotelRoutes = express.Router()

HotelRoutes.post('/list',HotelList)

HotelRoutes.post('/add',AddHotel)

HotelRoutes.put('/update',UpdateHotel)

HotelRoutes.delete('/delete' , RemoveHotel)

export default HotelRoutes

