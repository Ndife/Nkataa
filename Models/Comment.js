const Mongoose = require('mongoose');

let commentSchema = Mongoose.Schema({
    name: String,
    commentBody: String,
    time: Date,
});