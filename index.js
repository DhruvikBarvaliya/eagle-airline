const { port } = require('./Config/Config')
const express = require('express');
const app = express();
const router = require('./Routes/index')
const database = require('./Config/Database');

database();

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is Running on Port No :- ${port}`)
})