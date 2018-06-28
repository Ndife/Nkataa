const userRepository = require('../repositories/UserRepository');

exports.addUser = (req,res)=>{
    userRepository.add(data,(err)=>{
        if(err) res.json({err: err, message:"Sorry user could not be created"}); 
        res.json({message:"User created successfully"});
    }); 
}

exports.getAllUsers = (req,res)=>{
    userRepository.get({},(err,users)=>{
        if(err) res.json({err:err, message:"Sorry, something went wrong while try to retrieve users"});
        res.json(users);
    });
}

exports.geById= (req,res,id)=>{
    userRepository.getById(id,(err,user)=>{
        if(err) res.json({err:err, message:`Sorry, unable to find user with ${id}: id`});
        res.json(user); 
    });
}

exports.deleteById= function(req,res,id){
    userRepository.deleteById(id,(err)=>{
        if(err) res.json({err: err, message:"Failed to delete user"});
        res.json({message:'user deleted successfully'});
    })
};

exports.getUserByParam = (req,res,options)=>{
   userRepository.get(options,(err,user)=>{
    if(err) res.json({err:err, message:"Sorry, could not getuserby param"});
    res.json(user);
   }); 
}

