import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    hotelName: {
        type: String,
        required: true
    },
    starRating: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
        default: ""
    },
    city: {
        type: String,
        required: true,
        default: ""
    },
    state: {
        type: String,
        required: true,
        default: ""
    },
    postalCode: {
        type: Number,
        required: true,
        default: null
    },
    contact: {
        type: Number,
        required: true,
        default: null
    },
    lat: {
        type: Number,
        required: false,
        default: null
    },
    lng: {
        type: Number,
        required: false,
        default: null
    },
    facilities: {
        type: [String],
        required: false,
        default : []
    },
    rooms : {
        type : [],
        required : false,
        default : []
    }
})

export default mongoose.model('Hotel', HotelSchema)