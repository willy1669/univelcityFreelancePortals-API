const model = require('../models/gigs');
const employer =require('../models/employer');
const category = require('../models/category');
const service = require('../services/gigsService');

exports.addGigs = (req, res) => {
const data = {
    employer: req.body.employer,
    jobDescription: req.body.jobDescription,
    time: Date.now()
}
    try {
        return service.addGigs(req, res, data)
    }
    catch(exception) {
        console.log("Error: " +exception);
    }
} 

exports.getGigs = (req, res,) => {
    try {
        return service.getAllGigs(req, res, {});
    } catch(exception) {
        console.log("Error : "+exception);
    }
}

exports.getGigById = function (req, res){
    var id = req.params.id;
    return service.getGigById(req, res, id);
}
