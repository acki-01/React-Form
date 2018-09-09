/** @format */

const mongoose = require('mongoose');

const attandeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    email: String,
    date: String,
});

module.exports = mongoose.model('Attandee', attandeeSchema);
