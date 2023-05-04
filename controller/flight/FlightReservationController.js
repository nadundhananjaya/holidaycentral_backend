import Flight from "../../model/Flight/Flight.js";
import FlightReservation from "../../model/Flight/FlightReservation.js";

const requiredFields = [
    "flightId",
    "customerId",
    "seatSelection",
    "reservationDate"
]

export const makeFlightReservation = (req, res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }

    const cabinClass = req.body.seatSelection[0].cabinClass

    const filter = {
        _id: req.body.flightId
    }

    Flight.findById(filter).then(result => {

        if(result !== null) {
            const airPlane = result.airPlane;
            const departureAirport = result.departureAirport;
            const departureTime = result.departureTime
            const arrivalAirport = result.arrivalAirport;
            const arrivalTime = result.arrivalTime;
            const duration = result.duration;
            const seats = result.seats;

            const seat = seats.find(seat => seat.cabinClass === cabinClass);


            if (seat !== null) {

                const noOfSeats = parseInt(seat.noOfSeats)
                const noOfBookedSeats = parseInt(seat.noOfBookedSeats)
                if ((noOfSeats - noOfBookedSeats) === 0){
                    res.status(400).send({
                        message: `${cabinClass} is Full !`,
                    });
                }
                else if ((noOfSeats - noOfBookedSeats) < req.body.seatSelection[0].noOfSeats) {
                    res.status(400).send({
                        message: `${cabinClass} cabin only has ${(noOfSeats - noOfBookedSeats)} seats !`,
                    });
                } else {
                    const flightReservation = new FlightReservation({

                        flightId: req.body.flightId,
                        customerId: req.body.customerId,
                        airPlane: airPlane,
                        departureAirport: departureAirport,
                        departureTime: departureTime,
                        arrivalAirport: arrivalAirport,
                        arrivalTime: arrivalTime,
                        duration: duration,
                        mealPreferences: req.body.mealPreferences,
                        seatSelection: req.body.seatSelection,
                        reservationDate: req.body.reservationDate,
                    });

                    flightReservation.save().then(result => {

                        res.status(200).send(`${result} is successfully added !!!`)
                    }).catch(error => {
                        res.status(500).send(`Error ${error}!!!`)
                    })
                }
            }
        }
        else{
            res.status(500).send(`Error ! : Invalid Flight`)
        }

    }).catch(error => {
        res.status(500).send(`Error1 ${error}!!!`)
    })


}

export const flightReservationList = (req, res) => {
    FlightReservation.find().then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error ${error}`)
    })
}

export const deleteFlightReservation = (req, res) => {
    const filter = {
        _id: req.body.id
    }

    FlightReservation.findByIdAndDelete().then(result => {
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