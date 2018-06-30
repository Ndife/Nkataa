var Mongoose = require('mongoose');

var PostSchema = Mongoose.Schema({
    time: Date,
    postBody: String,
    userId: {type:Mongoose.Schema.Types.ObjectId, ref:'User'},
});

module.exports = Mongoose.model('Post', PostSchema);