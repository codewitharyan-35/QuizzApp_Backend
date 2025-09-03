const { v4 : uuid } = require("uuid");

const quizzes = {
    "data": [
        // 1st quiz card
        {
            id: uuid(),
            category: "marvel",
            title: "Marvel",
            description: "lorem ipsum",
            // Questions and Answers Options
            quiz: [
                {
                    id: uuid(),
                    question: "Black Panther is set in which fictional country?",
                    options: [
                        { id: uuid(), option: "Wakanda", isCorrect: true },
                        { id: uuid(), option: "Takanda", isCorrect: false },
                        { id: uuid(), option: "Jakanda", isCorrect: false },
                        { id: uuid(), option: "Zakanda", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        { id: uuid(), option: "Hulk", isCorrect: false },
                        { id: uuid(), option: "Thor", isCorrect: false },
                        { id: uuid(), option: "Captain Marvel", isCorrect: true },
                        { id: uuid(), option: "Captain America", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Thor's Mjolnir is made from metal of a dying ____?",
                    options: [
                        { id : uuid(), option: "Nebula", isCorrect: false },
                        { id : uuid(), option: "Moon", isCorrect: false },
                        { id : uuid(), option: "Sun", isCorrect: false },
                        { id : uuid(), option: "Star", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        { id : uuid(), option: "It's Crap", isCorrect: false },
                        { id : uuid(), option: "That's Bullshit", isCorrect: false },
                        { id : uuid(), option: "What ever", isCorrect: false },
                        { id : uuid(), option: "It's Perfect", isCorrect: true }
                    ]
                },
            ]
        },
        // 2nd quiz card
        {
            id: uuid(),
            category: "dc",
            title: "DC",
            description: "lorem ipsum",
            quiz: [
                {
                    id: uuid(),
                    question: "What was Wonder Woman originally named?",
                    options: [
                        { id: uuid(), option: "Anita", isCorrect: false },
                        { id: uuid(), option: "Suprema", isCorrect: true },
                        { id: uuid(), option: "Mishita", isCorrect: false },
                        { id: uuid(), option: "None", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which supervillian was once the Iranian Ambassador to the U.N.?",
                    options: [
                        { id: uuid(), option: "Wonder Man", isCorrect: false },
                        { id: uuid(), option: "Superman", isCorrect: false },
                        { id: uuid(), option: "The Joker", isCorrect: true },
                        { id: uuid(), option: "Batman", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is batman's favourite food?",
                    options: [
                        { id: uuid(), option: "Chicken Salad", isCorrect: false },
                        { id: uuid(), option: "Turkey Roast", isCorrect: false },
                        { id: uuid(), option: "Goat Ribbs", isCorrect: false },
                        { id: uuid(), option: "Mulligatawny Soup", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "In how many seconds can Green Arrow shoot and reload?",
                    options: [
                        { id: uuid(), option: "Two and a half seconds", isCorrect: true },
                        { id: uuid(), option: "Two Seconds", isCorrect: false },
                        { id: uuid(), option: "One Seconds", isCorrect: false },
                        { id: uuid(), option: "One and a half seconds", isCorrect: false }
                    ]
                },
            ]
        }
    ]
}

module.exports = quizzes;