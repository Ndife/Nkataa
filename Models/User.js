const Mongoose = require('mongoose');

let UserSchema = Mongoose.Schema({
    name: String,
    email: {type: String, unique:true},
    password: String,
});