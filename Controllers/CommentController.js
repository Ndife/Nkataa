const commentService = require('../services/CommentService');

module.exports.addComment = (req,res)=>{
    comment = {
        name: req.body.name,
        date: new Date,
        commentBody: req.body.commentBody,
        userId: req.body.userId,
        postId: req.body.userId,
    }
   return commentService.addComment(req,res,comment);
}