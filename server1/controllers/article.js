
//import tea model
const articles = require('../models/articles');


//GET all queries
const getAllArticles = (req, res) => {
    articles.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST queries
const newArticles = (req, res) => {
    //check if the query name already exists in db
    articles.findOne({ articleBody: req.body.articleBody }, (err, data) => {

        //if query not in db, add it
        if (!data) {
            //create a new tea object using the Tea model and req.body
            const newArticles = new articles({
                img:req.body.img,
                title:req.body.title,
                author:req.body.author,
                articleBody:req.body.articleBody,   
            })

            // save this object to database
            newArticles.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if there's an error or the tea is in db, return a message         
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"article already exists"});
        }
    })    
};



//GET '/tea/:name'
const getOneArticle = (req, res) => {
    let title = req.params.title; //get the tea name

    //find the specific tea with that name
    articles.findOne({title:title}, (err, data) => {
    if(err || !data) {
        return res.json({message: "article doesn't exist."});
    }
    else return res.json(data); //return the tea object if found
    });
};

//DELETE 1 article
const deleteOneArticle = (req, res) => {
    let title = req.params.title; // get the name of article to delete

    articles.deleteOne({title:title}, (err, data) => {
    //if there's nothing to delete return a message
    if( data.deletedCount == 0) return res.json({message: "article doesn't exist."});
    //else if there's an error, return the err message
    else if (err) return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({message: "article deleted."});
    });
};

//export controller functions
module.exports = {
    getAllArticles, 
    newArticles,
    getOneArticle,
   deleteOneArticle,
    // newComment,
  
    // deleteAllArticle
};