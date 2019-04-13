const express = require('express');
const router = express.Router();
const gigsController = require('../controllers/gigsController');

//GET graduate listing.
router.post('/addGig', gigsController.addGigs)


module.exports = router;