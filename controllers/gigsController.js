const model = require('../models/gigs');
const employer =require('../models/employer');
const category = require('../models/category');

exports.addGigs= (req, res) => {
const data = {
    employer: req.body.employer,
    jobDescription: req.body.jobDescription,
}
    try {
        return service.addGigs(req, res, data)
    }
    catch(exception) {
        console.log("Error: " +exception);
    }
} 
