var model = require('../Models/User');


exports.addUser = (req, res)=>{
    var data ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    model.create(data,(err)=>{
        if(err) res.json({err:err, message:'user could not be created'});
        res.json({message:'User created successfully'});
    }); 
}

exports.getUsers = (req, res)=>{
    model.find((err,users)=>{
        if(err) res.json({err:err, message:"Something went wrong"});
        res.json(users);
    })
}