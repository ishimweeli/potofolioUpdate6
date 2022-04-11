const express = require('express');
const router  = express.Router();
const queriesController = require('../controllers/queries');
const multer = require('multer');
const upload = multer();
router.post("/queries", upload.none(), queriesController.newQueries);

router.post('/queries', queriesController.newQueries);
router.get('/queries', queriesController.getAllQueries);

// router.delete('/tea', queriesController.deleteAllTea);

// router.get('/tea/:name', queriesController.getOneTea);
// router.post('/tea/:name', queriesController.newComment);
// router.delete('/tea/:name', queriesController.deleteOneTea);

module.exports = router;
