const repository = require ('../repositories/employerRepository');
const model = require('../models/employer');
//var cloud = require('../Services/cloudinaryService');

exports.signUp =  (req, res, data) => {
    repository.add(data, function(err){
        if (err) {
            res.json ({err: err, message: 'error, employer could not be added'});
        } 
        else {
            res.json ({message: 'employer created successfully'});
        }
    });
}

exports.getEmployerById = (req, res, id) => {
    repository.getById(id, function (err, employer){
        if (err) res.json ({err: err, message: 'error, could not get employer by id'});
        res.json ({Employer: employer});
    });
}

exports.getAllEmployers = (req, res, options) => {
    repository.getAll(options, '-__v', (err, Employers) => {
        if (err) res.json({err:err, message:'error, could not retrieve employers'});
        res.json(Employers);
    });
}