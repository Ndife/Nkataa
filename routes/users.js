var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UserController');

/* GET users listing. */
router.post('/create',userController.addUser);
router.get('/getUsers', userController.getUsers);
module.exports = router;
