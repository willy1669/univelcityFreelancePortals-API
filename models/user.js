const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({

        profile_img: {
            type: String,
            default: '1.jpg'
        }
});

module.exports = mongoose.model('user', userSchema);