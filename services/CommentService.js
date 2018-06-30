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

exports.getCommentById= (req,res,id)=>{
commentRepo.getById(id,(err,comment)=>{
    if(err) res.json({err:err, message:'Faild to get Comment by Id'});
    res.json(comment);
});
}