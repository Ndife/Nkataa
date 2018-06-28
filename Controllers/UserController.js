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

