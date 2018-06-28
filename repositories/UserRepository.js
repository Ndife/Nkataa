const model = require('../Models/User');
const baseRepository = require('../repositories/BaseRepository');

function UserRepository(){

}

UserRepository.prototype = baseRepository(model);

module.exports = new UserRepository();

