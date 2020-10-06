const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    isMale: {
        type: Boolean,
        required: true,
        default: true
    },
    doj: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('employeeSchema', employeeSchema);