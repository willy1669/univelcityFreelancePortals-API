const model = require('../models/gigs');
const employerRepo = require('../repositories/employerRepository');
const repository = require('../repositories/gigsRepository');

exports.addGigs = (req, res, data) => {
    repository.add(data, (err, gig) => {
        if (err) {
            res.json({err: err})
        }
        employerRepo.getById(data.employer, (err, employers) => {
            if (err) res.json({err: err, message: 'error, gig could not be added'});
            res.json ({message: 'gig created successfully'});
            console.log(data)
        })
    })
}