const model = require('../models/employer');
const joi = require('joi');
const passwordHash = require('password-hash');
const service = require('../services/employerService');

//Define schema for validating user input
const schema = joi.object().keys({
    employerName: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email(),
    password: joi.string().required()
});

exports.employerSignUp = (req, res) => {
    var data = {
        employerName: req.body.employerName,
        email: req.body.email,
        password: req.body.password,
    }
    // validating the employer input
    joi.validate({employerName: data.employerName, email: data.email, password: data.password}, schema, function (err) {
        try{
            if (err) {
                res.json({err: err.message});
            } 
            else {
                const hashPassword = passwordHash.generate(data.password);    //encrypt user password
                data.password = hashPassword;
                console.log(data.password);
                return service.signUp(req, res, data);
            }
        }
        catch (exception) {
            console.log("Error: " +exception);
        }
    })
}

exports.getEmployerById = (req, res) => {
    var id = req.params.id;
    try {
        return service.getEmployerById(req, res, id);
    } catch (exception) {
        console.log("Error : "+exception);
    }
}

exports.getEmployers = (req, res,) => {
    try {
        return service.getAllEmployers(req, res, {});
    } catch(exception) {
        console.log("Error : "+exception);
    }
}