const express = require('express');
const cors = require('cors');
const quizRouter = require('./router/quiz.router');

const app = express(); //Creating a Server!!
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello Geeks!!");
});

app.use('/quiz', quizRouter);

app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    console.log({ username, password });
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server Started...!!");
})