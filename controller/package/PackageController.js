import Package from "../../model/Packages/Package.js";


const requiredFields = [
    "packageName",
    "duration",
    "activities",
    "locationCovered",
    "maxNumberOfTravelers",
    "speciality",
    "destination",
    "pricePerPerson"
]

export const AddPackage = (req,res) => {

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    }
    else{
        const packageDetails = new Package({
            packageName : req.body.packageName,
            destination : req.body.destination,
            duration : req.body.duration,
            activities : req.body.activities,
            locationCovered : req.body.locationCovered,
            maxNumberOfTravelers : req.body.maxNumberOfTravelers,
            speciality : req.body.speciality,
            pricePerPerson : req.body.pricePerPerson
        })

        packageDetails.save().then(result => {
            res.send(`${result} is successfully Added !!!`)
        }).catch(error => {
            res.send(`${error} Error !!!`)
        })
    }

}

export const PackageList = (req,res) => {
    const filter = {
        destination : req.body.destination,
        duration : { $lte: req.body.duration},
        maxNumberOfTravelers :  { $lte: req.body.maxNumberOfTravelers },
    }
    Package.find(filter).then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error ${error}`)
    })
}

export const UpdatePackage = (req, res)=> {

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    }
    else{
        const filter = {
            _id : req.body.id
        }
        const packageDetails = {
            _id : req.body.id,
            packageName : req.body.packageName,
            duration : req.body.duration,
            activities : req.body.activities,
            destination : req.body.destination,
            locationCovered : req.body.locationCovered,
            maxNumberOfTravelers : req.body.maxNumberOfTravelers,
            speciality : req.body.speciality,
            pricePerPerson : req.body.pricePerPerson
        }

        Package.findByIdAndUpdate(filter,packageDetails).then(result => {
            res.send(`${result} is successfully Updated !!!`)
        }).catch(error => {
            res.send(`${error} Error !!!`)
        })
    }
}


export const removePackage = (req,res) => {
    const filter = {
        _id : req.body.id
    }

    Hotel.findByIdAndDelete(filter).then(result => {
        res.status(200).send(`${result} is removed !!!`)
    }).catch(error => {
        res.status(500).send(`Error ${error}`)
    })
}

