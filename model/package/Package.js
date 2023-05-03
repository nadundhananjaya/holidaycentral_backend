import mongoose from "mongoose";

const Schema = mongoose.Schema

const PackageSchema = new Schema({
    packageName: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    activities: {
        type: [],
        required: true
    },
    destination : {
        type : String,
        required : true
    },
    locationCovered: {
        type: [],
        required: true
    },
    maxNumberOfTravelers: {
        type: Number,
        required: true,
    },
    speciality: {
        type: [],
        required: true
    },
    pricePerPerson: {
        type : Number,
        required : true
    }
})

export default mongoose.model('Package', PackageSchema)
