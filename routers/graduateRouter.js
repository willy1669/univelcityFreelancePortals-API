const express = require('express');
const router = express.Router();
const graduateController = require('../controllers/graduateController');

//GET graduate listing.
router.post('/signUp', graduateController.graduateSignUp)


module.exports = router;