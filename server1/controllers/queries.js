
//import tea model
const queries = require('../models/queries');

//GET '/tea'
//GET all queries
const getAllQueries = (req, res) => {
    queries.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST queries
const newQueries = (req, res) => {
    //check if the query name already exists in db
    queries.findOne({ name: req.body.name }, (err, data) => {

        //if query not in db, add it
        if (!data) {
            //create a new tea object using the Tea model and req.body
            const newQueries = new queries({
                name:req.body.name,
                email:req.body.email,
                message:req.body.message,
               
                
            })

            // save this object to database
            newQueries.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if there's an error or the tea is in db, return a message         
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Tea already exists"});
        }
    })    
};

//DELETE '/tea'
const deleteAllTea = (req, res, next) => {
    res.json({message: "DELETE all tea"});
};

//GET '/tea/:name'
const getOneTea = (req, res, next) => {
    res.json({message: "GET 1 tea"});
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};

//export controller functions
module.exports = {
    getAllQueries, 
    newQueries,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea
};