const mongoose = require("mongoose"); //import mongoose

// tea schema
const queriesSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email:String,
    message:String,
    
    comments: [{ text: String, date: {type:String, default: new Date()} }]
});

const queries = mongoose.model('queries', queriesSchema); //convert to model named queries
module.exports = queries; //export for controller use
