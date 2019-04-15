const secret = process.env.SECRET_KEY;
const employer = require('../models/employer');
const joi = require('joi');
const passwordHash = require('password-hash');
const service = require('../services/employerService');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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
        gigs:[]
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

function isValidPassword(user, password){
    return passwordHash.verify(password, user.password);
}

passport.serializeUser(function(user, done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    employer.findById(id, function(err, user) {
        done(err, user);
    });
});

exports.loginUser = function (req, res) {
    passport.authenticate('login', {
    successRedirect: '/users', 
    failureRedirect: '/login'
    });
    try {
        passport.use ('login', new LocalStrategy(
            employer.findOne({email: req.body.email}, function (err, user) {
                if (err) {
                    res.json({err: err});
                }
                if (user && isValidPassword(user, req.body.password)) {
                    var token = jwt.sign({email: user.email, id: user._id}, '+secret+', {expiresIn: '12h'});
                    res.json({userId:user._id, email:user.email, username: user.username, token: token, message: 'Login successful.'});
                }
                else {
                    res.json({message: 'Incorrect email or password.'});
                    console.log(isValidPassword (req.body.password));
                }
                console.log(user);
            }),
        ));
    }
    catch (exception) {
        console.log(exception);
    }
}
exports.employerPostGig = (req, res) => {
    var data = {
        gigs: [],
        employer: req.body.employer,
        time: Date.now()
    }
    try {
        return service.employerAddGig(req, res, data)
    }   catch(exception) {
        console.log("Error : "+exception);
    }

}

exports.getEmployerById = function (req, res){
    var id = req.params.id;
    return service.getEmployerById(req, res, id);
}