var Mongoose = require('mongoose');

var commentSchema = Mongoose.Schema({
    name: String,
    time: Date,
    commentBody: String,
    user: {type:Mongoose.Schema.Types.ObjectId, ref:'User'},
    post: {type:Mongoose.Schema.Types.ObjectId, ref:'Post'},
});

module.exports =Mongoose.model('Comment',commentSchema);
