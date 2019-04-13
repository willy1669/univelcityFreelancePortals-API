var model = require('../models/employer');
var baseRepository = require('../repositories/baseRepository');

function employerRepository ()  {

}
employerRepository.prototype = baseRepository(model);
module.exports = new employerRepository();