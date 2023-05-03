import Customer from "../../model/Customer/Customer.js";

const requiredFields = [
    "customerName",
    "contact",
    "NIC",
]

export const AddCustomer = (req, res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    } else {
        const customer = new Customer({
            customerName: req.body.customerName,
            contact: req.body.contact,
            NIC: req.body.NIC
        });

        customer.save().then(result => {
            res.status(200).send(`${result} is successfully added !!!`)
        }).catch(error => {
            res.status(500).send(`Error : ${Error} !!!`)
        })
    }
}

export const UpdateCustomer = (req, res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    } else {
        const filter = {
            _id: req.body.id
        }
        const customer = {
            customerName: req.body.customerName,
            contact: req.body.contact,
            NIC: req.body.NIC
        }

        Customer.findByIdAndUpdate(filter, customer).then(result => {
            res.status(200).send(`${result} is successfully added !!!`)
        }).catch(error => {
            res.status(500).send(`Error : ${Error} !!!`)
        })
    }
}

export const CustomerList = (req, res) => {

    Customer.find().then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error : ${error} !!!`)
    })
}

export const DeleteCustomer = (req, res) => {

    const filter = {
        _id: req.body.id
    }

    Customer.findByIdAndDelete(filter).then(result => {
        res.status(200).send({
            message: "Successfully Removed !!!",
            status: 200
        })
    }).catch(err => {
        res.status(500).send({
            message: "Error !!!",
            status: 500
        })
    })
}
