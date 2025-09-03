const express = require('express');
const quizzes = require('../db/quizzes');
const quizRouter = express.Router();

quizRouter.route('/')
    .get((req, res) => {
        res.json(quizzes);
    })

module.exports = quizRouter;