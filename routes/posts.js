var express = require('express');
var router = express.Router();
var postController = require('../Controllers/PostController');

/* GET posts listing */
router.post('/addPost', postController.addPost);
router.get('/getAllPost', postController.getPosts);
router.get('/getPostById',postController.getById);
router.get('/getPostByParams',postController.getByparams); 
router.post('/updatePost/:id',postController.updatePost); 
router.get('/deletePost',postController.deletePost);

module.exports = router;