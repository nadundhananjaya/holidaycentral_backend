import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Flight = new Schema({
    airPlane: {
        type: String,
        required: true
    },
    departureAirport: {
        type: String,
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalAirport: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    mealPreferences: {
        type: [],
        required: true
    },
    seats :  {
        type: [],
        required: true
    },
})

export default mongoose.model('Flight', Flight)