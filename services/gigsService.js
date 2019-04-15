const model = require('../models/gigs');
const emp = require('../models/employer');
const Repo = require('../repositories/employerRepository');
const repository = require('../repositories/gigsRepository');
const employerControler = require('../controllers/employerController');


exports.addGigs = (req, res, data) => {
    repository.add(data, function (err, gig) {
        Repo.getById(data.employer, function (err, employer) {
            employer.gigs.push(gig._id)
            if (err) res.json({err: err, message: 'error, gig could not be added'});
            res.json ({message: 'gig created successfully'});
        })
    })
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