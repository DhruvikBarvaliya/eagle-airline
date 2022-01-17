const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/eagle_airline', { useNewUrlParser: true });

    mongoose.connection.on("connected", () => {
        console.log("Database Successfully Connected");
    });
};