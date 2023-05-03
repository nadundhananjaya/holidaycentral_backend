import express from "express";
import {addFlight, flightDelete, flightList, updateFlight} from "../controller/Flight/FlightController.js";

const FlightRoutes = express.Router();

FlightRoutes.post('/list', flightList);

FlightRoutes.post('/add', addFlight);

FlightRoutes.put('/update', updateFlight);

FlightRoutes.delete('/delete', flightDelete)



export default FlightRoutes