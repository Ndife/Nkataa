const commentRepo = require('../repositories/CommentRepo');

module.exports.addComment = (req,res,comment)=>{
    commentRepo.add(comment,(err)=>{
        if(err) res.json({err:err, message:'failed to add comment'});
        res.json({message:'comment added successfully'});
    });
}