const express = require('express');
const cors = require('cors');
const quizRouter = require('./router/quiz.router');
const userdata = require('./db/users');

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
    // res.json({username, password, message: "got the values!!"})
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    if(isUserVerified){
        res.status(200).json({ message: "User Verified!!" });
    }else{
        res.status(401).json({ message: "Invalid Credentials!! "});
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server Started...!!");
})