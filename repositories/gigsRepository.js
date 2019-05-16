var model = require('../models/gigs');
var baseRepository = require('../repositories/baseRepository');

function gigsRepository ()  {

}
gigsRepository.prototype = baseRepository(model);
module.exports = new gigsRepository();