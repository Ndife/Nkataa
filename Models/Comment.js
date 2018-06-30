var Mongoose = require('mongoose');

var commentSchema = Mongoose.Schema({
    name: String,
    time: Date,
    commentBody: String,
    userId: {type:Mongoose.Schema.Types.ObjectId, ref:'User'},
    postId: {type:Mongoose.Schema.Types.ObjectId, ref:'Post'},
});

module.exports =Mongoose.model('Comment',commentSchema);
