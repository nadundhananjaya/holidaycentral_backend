import Hotel from "../../model/Hotel/Hotel.js";

const requiredFields = [
    "hotelName",
    "starRating",
    "address",
    "city",
    "state",
    "postalCode",
    "contact",
    "lat",
    "lng",
    "facilities",
    "rooms"
]

export const AddHotel = (req,res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }
    else{
        const hotel = new Hotel({
            hotelName : req.body.hotelName ,
            starRating : req.body.starRating,
            address : req.body.address,
            city : req.body.city,
            state : req.body.state,
            postalCode : req.body.postalCode,
            contact : req.body.contact,
            lat : req.body.lat,
            lng : req.body.lng,
            facilities : req.body.facilities,
            rooms : req.body.rooms
        });

        hotel.save().then(result => {
            res.send(`${result} is successfully added !`)
        }).catch(error => {
            res.send(`${error}`)
        })
    }
}

export const UpdateHotel = (req,res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }
    else{
        const filter = {
            _id : req.body.id
        }
        const hotel = new Hotel({
            _id : req.body.id,
            hotelName : req.body.hotelName ,
            starRating : req.body.starRating,
            address : req.body.address,
            city : req.body.city,
            state : req.body.state,
            postalCode : req.body.postalCode,
            contact : req.body.contact,
            lat : req.body.lat,
            lng : req.body.lng,
            facilities : req.body.facilities,
            rooms : req.body.rooms
        });

        Hotel.findByIdAndUpdate(filter,hotel).then(result => {
            res.send(`${result} is successfully updated !`)
        }).catch(error => {
            res.send(`${error}`)
        })
    }
}

export const RemoveHotel = (req,res) => {

    const filter = {
        _id : req.body.id
    }

    Hotel.findByIdAndDelete(filter).then(result => {
        res.status(200).send(`${result} is removed !`)
    }).catch(error => {
        res.status(500).send(`Error ${error}`)
    })

}

export const HotelList = (req,res) => {
    const filter = {
        city : req.body.destination
        // arrivalAirport :  req.body.arrivalAirport,
    }
    Hotel.find(filter).then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error ${error}`)
    })
}

