const mongoose = require('mongoose');

const gigsSchema = mongoose.Schema({
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employer'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    title: String,
    jobDescription: String,
    time: Date
})

module.exports = mongoose.model('gigs', gigsSchema);