const { v4: uuid } = require('uuid');

const userdata = {
    "data": [
        {
            id: uuid(),
            username: "Aryan",
            password: "aryan@1122",
            emailId: "aryan@gmail.com"
        },
        {
            id: uuid(),
            username: "Akarsh",
            password: "akarsh@1122",
            emailId: "akarsh@gmail.com"
        },
    ]
}

module.exports = userdata;