const mongoose = require ('mongoose');

const graduateSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    profileImg: String,
    profileImgId: String,
    rating:Number,
});

module.exports = mongoose.model('graduate', graduateSchema);