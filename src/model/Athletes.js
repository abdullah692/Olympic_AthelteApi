const mongoose = require('mongoose')

const athletesSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        reuqired: true,
        trim: true
    }
})

const Atheltes = new mongoose.model('Atheltes', athletesSchema);

module.exports = Atheltes;