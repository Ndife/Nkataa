const commentService = require('../services/CommentService');

exports.addComment = (req,res)=>{
    comment = {
        name: req.body.name,
        date: new Date,
        commentBody: req.body.commentBody,
        userId: req.body.userId,
        postId: req.body.userId,
    }
   return commentService.addComment(req,res,comment);
}

exports.getComments = (req,res)=>{
return commentService.getComments(req,res);
}

exports.getById = (req,res)=>{
    id = {_id:req.query._id};
return commentService.getCommentById(req,res,id);
}