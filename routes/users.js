var express = require('express');
var router = express.Router();
const userController = require('../Controllers/UserController');

/* GET users listing. */
router.get('/create',userController.addUser);

module.exports = router;
