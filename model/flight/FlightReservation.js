import mongoose from "mongoose";

const Schema = mongoose.Schema;


const FlightReservation = new Schema({
    flightId: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        isRequired: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        isRequired: true
    },
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
    seatSelection: {
        type: [],
        required: true
    },
    reservationDate: {
        type: Date,
        required: true
    },
});





export default mongoose.model('FlightReservation', FlightReservation)