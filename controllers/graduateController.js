const secret = process.env.SECRET_KEY;
const graduate = require('../models/graduate');
const joi = require('joi');
const passwordHash = require('password-hash');
const service = require('../services/graduateService');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');

//Define schema for validating user input
const schema = joi.object().keys({
    firstname: joi.string().alphanum().min(3).max(30).required(),
    lastname: joi.string().alphanum().min(3).max(30).required(), 
    email: joi.string().email(),
    password: joi.string().required()
});

exports.graduateSignUp = (req, res) => {
    var data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }
    console.log(data)
    // validating the user input
    joi.validate({firstname: data.firstname, lastname: data.lastname, email: data.email, password: data.password}, schema, function (err) {
        try{
            if (err) {
                res.json({err: err.message});
            } 
            else {
                const hashPassword = passwordHash.generate(data.password);    //encrypt user password
                data.password = hashPassword;
                //console.log(data.password);
                return service.signUp(req, res, data);
            }
        }
        catch (exception) {
            console.log("Error: " +exception);
        }
    })
}

var isValidPassword = (user, password) => {
    return passwordHash.verify(password, user.password);
}

passport.serializeUser(function(user, done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    graduate.findById(id, function(err, user) {
        done(err, user);
    });
});

exports.loginUser = function (req, res,) {
    passport.authenticate('login', {
    successRedirect: '/users', 
    failureRedirect: '/login'
    });
    try {
        passport.use ('login', new LocalStrategy(
            graduate.findOne({email: req.body.email}, function (err, user) {
                if (err) {
                    res.json({err: err});
                }
                if (user && isValidPassword(user, req.body.password)) {
                    var token = jwt.sign({email: user.email, id: user._id}, '+secret+', {expiresIn: '12h'});
                    res.json({userId:user._id, email:user.email, username: user.username, token: token, message: 'Login successful.'});
                }
                else {
                    res.json({message: 'Incorrect username or password.'});
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