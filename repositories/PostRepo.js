const baseRepo = require('../repositories/BaseRepository');
const model = require('../Models/Post');

function PostRepository(){

}
PostRepository.prototype = baseRepo(model);

module.exports = new PostRepository();