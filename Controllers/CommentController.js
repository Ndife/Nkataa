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

exports.updateComments = (req,res)=>{
    id = {_id:req.params.id}
    data = {
        name: req.body.name,
        date: new Date,
        commentBody: req.body.commentBody,
    }
    return commentService.updateComments(req,res,id,data);
}
