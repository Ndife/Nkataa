const userService = require('../services/UserService');

exports.addUsers = (req,res)=>{
    data ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
   return userService.addUser(data,res);
}

exports.getUsers = (req,res)=>{
    return userService.getAllUsers(req,res);
}

exports.getById = (req,res,id)=>{
    id = req.query._id;
    return userService.geById(req,res,id);
}


exports.deleteById = (req,res,id)=>{
    id = {_id:req.query._id}
    return userService.deleteById(req,res,id);
}


exports.getUserByParams = (req,res,options)=>{
    options = req.query;
     return userService.getUserByParam(req,res,options)
 }

 exports.updateUser = (req,res)=>{
    var id = {_id:req.params.id} 
    let data ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    return userService.updateUser(req,res,id,data);
 }
 