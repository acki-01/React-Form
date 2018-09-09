/** @format */

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Attandee = require('../models/attandee');

router.post('/', (req, res, next) => {
    const { name, surname, email, date } = req.body;
    const attandee = new Attandee({
        _id: new mongoose.Types.ObjectId(),
        name,
        surname,
        email,
        date,
    });
    res.status(201).json({
        message: 'Handling POST for /attandees',
        savedAttandee: attandee,
    });
    attandee
        .save()
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
});

module.exports = router;
