var repository = require ('../repositories/graduateRepository');
var model = require('../models/graduate');
//var cloud = require('../Services/cloudinaryService');

exports.signUp = function (req, res, data){
    repository.add(data, function(err){
        if (err) {res.json ({err: err, message: 'error, user could not be added'});} else {
        res.json ({message: 'user created successfully'});}
    });
}