const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');
const quizRouter = require('./router/quiz.router');

const app = express(); //Creating a Server!!
app.use(cors());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello Geeks!!");
});

app.use('/quiz', quizRouter)

app.listen(process.env.PORT || PORT, () => {
    console.log("Server Started...!!");
})