const mongoose = require ('mongoose');

const graduateSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    profileImg: String,
    profileImgId: String,
    rating:Number,
});

module.exports = mongoose.model('graduate', graduateSchema);