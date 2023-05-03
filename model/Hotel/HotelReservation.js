import mongoose from "mongoose";

const Schema = mongoose.Schema

const HotelReservation = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Hotel'
    },
    roomId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'HotelRoom'
    },
    customerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    check_in_date: {
        type: Date,
        required: true
    },
    check_out_date: {
        type: Date,
        required: true
    },
    reservationDate: {
        type: Date,
        required: true
    },
})

export default mongoose.model('HotelReservation', HotelReservation)
