export {}

const mongoose = require('mongoose')

const FormsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    organisation: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Form', FormsSchema)
