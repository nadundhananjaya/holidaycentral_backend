import mongoose from "mongoose";

const SCHEMA = mongoose.Schema

const CheckOutSchema = new SCHEMA({
    customerName: {
        type: String,
        required: true
    },
    customerMobile: {
        type: Number,
        require: true
    },
    checkOutDetails: {
        type: [],
        required: true
    }
})

export default mongoose.model('checkout', CheckOutSchema)
