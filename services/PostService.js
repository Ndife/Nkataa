const postRepo = require('../repositories/PostRepo');

exports.addPost = (req,res,post)=>{
    postRepo.add(post,(err)=>{
        if(err) res.json({err:err, message:"Sorry, Failed to add post"});
        res.json({message:"Post added successfully"});
    });
}

exports.getAllPost = (req,res)=>{
    postRepo.get({},(err,data)=>{
        if(err) res.json({err:err, message:'sorry, could not get post'});
        res.json(data);
    });
}