const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController');

//GET graduate listing.
router.post('/signUp', employerController.employerSignUp);
router.get('/employer/:id', employerController.getEmployerById);
router.get('/', employerController.getEmployers);
router.post('/addGig', employerController.employerPostGig);
router.post('/login', employerController.loginUser);


module.exports = router;