const postService = require('../services/PostService');

exports.addPost = (req,res)=>{
    post = {
        time: new Date(),
        postBody: req.body.postBody,
        userId: req.body.userId,
    }
    return postService.addPost(req,res,post);
}

exports.getPosts = (req,res)=>{
    return postService.getAllPost(req,res);
}

exports.getById = (req,res,id)=>{
    id = {_id:req.query._id};
    return postService.getPostById(req,res,id);
}