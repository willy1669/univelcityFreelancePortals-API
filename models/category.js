const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    gigs: {
        tpe: mongoose.Schema.Types.ObjectId,
        ref: 'gigs'
    },
    categoryName: String
})

module.exports = mongoose.model('category', categorySchema);