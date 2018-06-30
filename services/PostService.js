const postRepo = require('../repositories/PostRepo');

exports.addPost = (req,res,post)=>{
    postRepo.add(post,(err)=>{
        if(err) res.json({err:err, message:"Sorry, Failed to add post"});
        res.json({message:"Post added successfully"});
    });
}

exports.getAllPost = (req,res)=>{
    postRepo.get({},(err,post)=>{
        if(err) res.json({err:err, message:'sorry, could not get posts'});
        res.json(post);
    });
}

exports.getPostById = (req,res,id)=>{
    postRepo.getById(id,(err,data)=>{
        if(err) res.json({err:err, message:'sorry, faild to get post'});
        res.json(data);
    });
}

exports.getByParams = (req,res,option)=>{
    postRepo.get(option,(err,data)=>{
        if(err) res.json({err: err, message:'Sorry, failed to the the user'});
        res.json(data);
    });
}

exports.updatePost = (req,res,id,data)=>{
    postRepo.updateUser(id,data,(err)=>{
        if(err) res.json({err:err, message:'something wrong, failed to update'});
        res.json({message:'Post updated successfully'});
    });
}

exports.deletePost = (req,res,id)=>{
postRepo.deleteById(id,(err,data)=>{
    if(err) res.json({err:err, message:'failed to delete user'});
    res.json({message:'user deleted successfully'});
});
}