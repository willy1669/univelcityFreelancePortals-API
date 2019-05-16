const moongoose = require ('moongose');

const adminSchema = moongoose.schema({
    user: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = moongoose.model('admin', adminSchema);