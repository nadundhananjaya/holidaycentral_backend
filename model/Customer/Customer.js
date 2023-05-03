import mongoose from "mongoose";

const Schema = mongoose.Schema

const Customer = new Schema({
    customerName: {
        type: String,
        required: true
    },
    contact : {
        type: String,
        required: true
    },
    NIC : {
        type : String,
        required :true
    },
    registeredDate : {
        type : Date,
        default : Date.now(),
        required : false
    }
})

export default mongoose.model('Customer', Customer)
