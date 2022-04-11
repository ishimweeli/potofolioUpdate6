const mongoose = require("mongoose"); //import mongoose

// articles  schema
const articlesSchema = new mongoose.Schema({

    img: 
    {
        data: Buffer,
        contentType: String
    },
    title: {type:String, required:true},
      author:String,
      articleBody:String,
   
    
    comments: [{ text: String, date: {type:String, default: new Date()} }]
});

const articles = mongoose.model('articles', articlesSchema); //convert to model named Tea
module.exports = articles; //export for controller use

