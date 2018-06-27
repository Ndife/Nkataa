const Mongoose = require('mongoose');

let PostSchema = Mongoose.Schema({
    time: Date,
    postBody: String,
    user: {type:Mongoose.Schema.Types.ObjectId, ref:'User'},
    comment: {type:Mongoose.Schema.Types.ObjectId, ref:'Comment'}
});

module.exports = Mongoose.model('Post', PostSchema);