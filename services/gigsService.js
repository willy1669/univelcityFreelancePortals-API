const model = require('../models/gigs');
const emp = require('../models/employer');
const employerRepo = require('../repositories/employerRepository');
const repository = require('../repositories/gigsRepository');
const employerControler = require('../controllers/employerController');


exports.addGigs = (req, res, data, employer) => {
    employerRepo.getById(employer, function(err, oga) {
        console.log(oga)
        if (err) {
            res.json({err: err})
        }
        else {
            repository.add(data, function(oga) {
                console.log(data)
                res.json(data)
            })
        }
    }).populate(gigs)
} 

exports.getAllGigs = (req, res, options) => {
    repository.getAll(options, '-__v', (err, Employers) => {
        if (err) res.json({err:err, message:'error, could not retrieve employers'});
        res.json(Employers);
    });
}

exports.getGigById = (req, res, id) => {
    repository.getById(id, function (err, gig){
        if (err) res.json ({err: err, message: 'error, could not get gig by id'});
        res.json ({Gig: gig});
    });
}

exports.searchByTitle = function(req, res, title){
    model.find({title: { $regex: title, $options: 'gi' }}, function(err, gigs){
        if (err){
            res.json({err: err, message: 'error, gig not available'});
        } else {
            res.json(gigs);
        }
    })
}

exports.searchByTitle = function(req, res, title){
    model.find({title: { $regex: title, $options: 'gi' }}, function(err, healthKits){
        if (err){
            res.json({err: err, message: 'error, search failed'});
        } else {
            res.json(healthKits);
        }
    })
}