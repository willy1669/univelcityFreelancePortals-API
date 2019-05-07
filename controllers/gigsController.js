const model = require('../models/gigs');
const employer =require('../models/employer');
const category = require('../models/category');
const service = require('../services/gigsService');

exports.addGigs = (req, res) => {
    const employer = req.body.employer;
    const data = {
        jobDescription: req.body.jobDescription,
        time: Date.now(),
        title: req.body.title
    }
    try {
        return service.addGigs(req, res, data, employer)
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

exports.searchGigs = function (req, res){
    try {
        var options = req.query.title;
        return service.searchByTitle(req, res, options);
    } catch (exception){
        console.log("Error : "+exception);
    }
} 
