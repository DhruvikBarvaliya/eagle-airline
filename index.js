const { port } = require('./Config/Config')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hi")
})

app.listen(port, () => {
    console.log(`Server is Running on Port No :- ${port}`)
})