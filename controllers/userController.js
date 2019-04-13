const passwordHash = require('password-hash');
const model = require('../models/user');
const Joi = require ('joi');

//Define schema for validating user input
const schema = Joi.object().keys({
    firstname: Joi.string().alphanum().min(3).max(30).required(),
    lastname: Joi.string().alphanum().min(3).max(30).required(), 
    email: Joi.string().email(),
    password: Joi.string().required()
});

//Define the sign up function
exports.addUser = (req, res) => {
    var data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }
    // validating the user input
    Joi.validate({firstname: data.firstname, lastname: data.lastname, email: data.email, password: data.password}, schema, function (err) {
        try{
            if (err) {
                res.json({err: err.message});
            } 
            else {
                const hashPassword = passwordHash.generate(data.password);    //encrypt user password
                data.password = hashPassword;
                console.log(data.password);
                return service.addUser(req, res, data);
            }
        }
        catch (exception) {
            console.log("Error: " +exception);
        }
    })
}
