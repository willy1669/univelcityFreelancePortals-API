const express = require('express');
const router = express.Router();
const gigsController = require('../controllers/gigsController');

//GET graduate listing.
router.post('/addGig', gigsController.addGigs);
router.get('/', gigsController.getGigs);
router.get('/:id', gigsController.getGigById);


module.exports = router;