import Flight from "../../model/Flight/Flight.js";

const requiredFields = [
    "airPlane",
    "departureAirport",
    "departureTime",
    "arrivalAirport",
    "arrivalTime",
    "duration",
    "mealPreferences",
    "seats",
]

export const addFlight = (req, res) => {


    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }

    const flight = new Flight({
        airPlane: req.body.airPlane,
        departureAirport: req.body.departureAirport,
        departureTime: req.body.departureTime,
        arrivalAirport: req.body.arrivalAirport,
        arrivalTime: req.body.arrivalTime,
        cabinClass: req.body.cabinClass,
        duration: req.body.duration,
        price: req.body.price,
        mealPreferences: req.body.mealPreferences,
        seats : req.body.seats
    });

    flight.save().then(result => {
        res.status(200).send(`${result} is successfully added !!!`)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })
}


export const updateFlight = (req, res) => {

    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }

    const filter = {
        _id: req.body.id
    }
    const flight = new Flight({
        _id: req.body.id,
        airPlane: req.body.airPlane,
        departureAirport: req.body.departureAirport,
        departureTime: req.body.departureTime,
        arrivalAirport: req.body.arrivalAirport,
        arrivalTime: req.body.arrivalTime,
        cabinClass: req.body.cabinClass,
        duration: req.body.duration,
        price: req.body.price,
        mealPreferences: req.body.mealPreferences,
        seats : req.body.seats
    });

    Flight.findByIdAndUpdate(filter, flight).then(result => {
        res.status(200).send(`${result} is successfully updated !!!`)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })
}

export const flightList = (req, res) => {


    const filter = {
        departureAirport : req.body.departureAirport,
        departureTime : { $gte: new Date(req.body.departureTime) , $lte: new Date(req.body.arrivalTime) },
        arrivalAirport :  req.body.arrivalAirport,
        arrivalTime : { $gte: new Date(req.body.departureTime), $lte: new Date(req.body.arrivalTime) },
        "seats.cabinClass":  req.body.cabinClass,
    }


    Flight.find(filter).then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.send(err)
    })

}

export const flightDelete = (req, res) => {
    const filter = {
        _id: req.body.id
    }

    Flight.findByIdAndDelete(filter).then(result => {
        res.status(200).send({
            message: `Successfully Removed ${result} !!!`,
            status: 200
        })
    }).catch(err => {
        res.status(500).send({
            message: "Error !!!",
            status: 500
        })
    })
}