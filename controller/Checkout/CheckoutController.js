

import Checkout from "../../model/Checkout/Checkout.js";


const requiredFields = [
    "customerName",
    "customerMobile",
    "checkOutDetails"
]

export const makeCheckout = (req,res) => {

    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    } else {
        const checkoutDetails = new Checkout({
            customerName: req.body.customerName,
            customerMobile: req.body.customerMobile,
            checkOutDetails: req.body.customerMobile,
        });
        checkoutDetails.save().then(result => {
            res.status(200).send(JSON.stringify(`package is successfully added !!!`))
        }).catch(error => {
            res.status(500).send(`Error : ${Error} !!!`)
        })
    }
}

export const checkoutList = (req,res) => {
    Checkout.find().then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error : ${error} !!!`)
    })
}
