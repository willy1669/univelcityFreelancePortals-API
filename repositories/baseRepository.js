function BaseRepository(model){
    if (!model) throw new Error('A model must be provided');
    this.model = model;
}

BaseRepository.prototype.add = function (data, callback) {
    this.model.create(data, callback);
}

BaseRepository.prototype.getAll = function (options, columns, callback) {
    this.model.find(options, columns, callback);
}

BaseRepository.prototype.getById = function(id, callback){
    this.model.findById(id, callback);
}

module.exports = function(model){
    return new BaseRepository(model);
}