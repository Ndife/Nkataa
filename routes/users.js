var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UserController');
var postController = require('../Controllers/PostController');

/* GET users listing. */
router.post('/create',userController.addUsers); 
router.get('/getUsers', userController.getUsers);
router.get('/getUserById',userController.getById);
router.get('/getUsersByParams',userController.getUserByParams);
router.get('/delete',userController.deleteById);
router.post('/update/:id',userController.updateUser);

module.exports = router;
