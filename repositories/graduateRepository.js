var model = require('../models/graduate');
var baseRepository = require('../repositories/baseRepository');

function graduateRepository ()  {

}
graduateRepository.prototype = baseRepository(model);
module.exports = new graduateRepository();