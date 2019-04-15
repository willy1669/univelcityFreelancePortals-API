var repository = require('../repositories/userRepository');

exports.addUser = function(req, res, data){
    repository.add(data, function(err, user){
        if (err) res.json({err:err, message:'error, user could not be created.'});
        res.json({message: 'user created successfully'});
    });
}