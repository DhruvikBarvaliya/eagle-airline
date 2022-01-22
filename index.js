const { port } = require('./Config/Config')
const express = require('express');
const app = express();
const indexRouter = require('./Routes/index')
const database = require('./Config/Database');

database();

app.use(express.static('Public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', indexRouter)

/* app.get('/',(req,res)=>{
    return res.redirect('Home.html')
}) */

app.listen(port, () => {
    console.log(`Server is Running on Port No :- ${port}`);
}) 