const repository = require ('../repositories/employerRepository');
const model = require('../models/employer');
//var cloud = require('../Services/cloudinaryService');

exports.signUp = function (req, res, data){
    repository.add(data, function(err){
        if (err) {res.json ({err: err, message: 'error, book could not be added'});} else {
        res.json ({message: 'user created successfully'});}
    });
}