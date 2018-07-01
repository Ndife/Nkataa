const commentRepo = require('../repositories/CommentRepo');

exports.addComment = (req,res,comment)=>{
    commentRepo.add(comment,(err)=>{
        if(err) res.json({err:err, message:'failed to add comment'});
        res.json({message:'comment added successfully'});
    });
}

exports.getComments = (req,res)=>{
    commentRepo.get({},(err,comments)=>{
        if(err) res.json({err:err, message:'Sorry, something went wrong'});
        res.json(comments);
    });
}

exports.updateComments = (req,res,id,data) =>{
    commentRepo.updateUser(id,data,(err)=>{
        if(err) res.json({err:err, message:'comment failed to update'});
        res.json({message:'comment updated successfully'});
    });
}

exports.deleteComment = (req,res,id) =>{
    commentRepo.deleteById(id,(err)=>{
        if(err) res.json({err:err, message:'Error occur, could not delete comment'});
        res.json({message:'comment deleted successfully'});
    });
}