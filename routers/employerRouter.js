const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController');

//GET graduate listing.
router.post('/signUp', employerController.employerSignUp)


module.exports = router;