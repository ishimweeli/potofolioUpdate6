const express = require('express');
const router  = express.Router();
const articlesController = require('../controllers/article');
const multer = require('multer');
const upload = multer();
router.post("/articles", upload.none(), articlesController.newArticles);

router.post('/articles', articlesController.newArticles);
router.get('/articles', articlesController.getAllArticles);
 router.get('/articles/:title', articlesController.getOneArticle);
 router.delete('/articles/:title', articlesController.deleteOneArticle);

 
// router.delete('/tea', queriesController.deleteAllTea);

// router.post('/tea/:name', queriesController.newComment);


module.exports = router;





