const repository = require ('../repositories/employerRepository');
const model = require('../models/employer');
var mailer = require('../mailer');
//var cloud = require('../Services/cloudinaryService');


exports.signUp =  (req, res, data) => {
    repository.add(data, function(err, employer){
        if (err) {
            res.json ({err: err, message: 'error, employer could not be created'});
        } 
        else {
        var body = 'Thank you for joining us! You will soon be receiving newsletters and updates crafted by the Univelcityreelanceportal team to speed up your experience. We are committed to helping you get the best out of our platform. Welcome to our platform'
        mailer.sendMail(employer.email, 'Welcome to Univelcity Freelance Portal', employer.employerName, body,);
        res.json ({message: 'employer created successfully'});
        }
    });
}

exports.getEmployerById = (req, res, id) => {
    repository.getById(id, function (err, employer){
        if (err) res.json ({err: err, message: 'error, could not get employer by id'});
        res.json (employer);
    });
}

exports.getAllEmployers = (req, res, options) => {
    repository.getAll(options, '-__v', (err, Employers) => {
        if (err) res.json({err:err, message:'error, could not retrieve employers'});
        res.json(Employers);
    });
}

exports.employerAddGig = (req, res, data) => {
    repository.add(data, (err, gig) => {
        if (err) res.json({err: err, message: 'error, gg could not be add'})
        else {
            repository.getById(data.employer, (err, employer) => {
                console.log(data.employer)
                console.log(data.gigs)
                console.log(gig._id)
            data.gigs.push(gig._id)
            employer.save()
           // data.save()        
           res.json(data)        
            })
        }

    })
}