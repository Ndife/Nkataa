const baseRepo = require('../repositories/BaseRepository');
const model = require('../Models/Comment');

function commentRepository(){

}

commentRepository.prototype = baseRepo(model);

module.exports = new commentRepository();