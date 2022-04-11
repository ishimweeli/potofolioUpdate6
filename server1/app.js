const express = require ('express');
const routes = require('./routes/queries'); 
const routes1 = require('./routes/article'); 
// import the routes

const app = express();

require('dotenv').config();

app.use(express.json());
app.use('/', routes);
app.use('/', routes1);

 //to use the routes
 
 //import mongoose
 const mongoose = require('mongoose');

 //establish connection to database
 mongoose.connect(
    process.env.MONGODB_URI,
     {useUnifiedTopology: true, useNewUrlParser: true},
     (err) => {
         if (err) return console.log("Error: ", err);
         console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
     }
 );
 
 

const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})