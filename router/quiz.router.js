const express = require('express');
const quizzes = require('../db/quizzes');
const quizRouter = express.Router();

quizRouter.route('/')
    .get((req, res) => {
        res.send(quizzes.data);
    })

module.exports = quizRouter;