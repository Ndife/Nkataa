const Mongoose = require('mongoose');

let UserSchema = Mongoose.Schema({
    name: String,
    email: {type: String, unique:true},
    password: String,
    posts: [{type:Mongoose.Schema.Types.ObjectId, ref:'Post'}]
});

module.exports = Mongoose.model('User',UserSchema);