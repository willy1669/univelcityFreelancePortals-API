const mongoose = require ('mongoose');

const employerSchema = mongoose.Schema({
    employerName: String,
    email: String,
    password: String,
    gigs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gigs'
    }]
})

module.exports = mongoose.model('employer', employerSchema);