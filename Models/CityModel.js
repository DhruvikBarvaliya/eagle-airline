const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const CitySchema = new Schema({
    city_id: { type: String,unique: true ,required: true},
    city_name: { type: String,unique: true,required: true },
    city_state: { type: String },
    city_country: { type: String }
},
    { versionKey: false });
     
module.exports = mongoose.model('citys', CitySchema)