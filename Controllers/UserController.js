const model = require('../Models/User');

exports.addUser = (req, res)=>{
    data ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    model.create(data,(err)=>{
        if(err) res.json({err:err, message:'user could not be created'});
        res.json({message:'User created successfully'});
    });
}