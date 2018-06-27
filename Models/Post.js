const Mongoose = require('mongoose');

let PostSchema = Mongoose.Schema({
    time: Date,
    postBody: String,
    
});