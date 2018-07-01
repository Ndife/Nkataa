const express = require('express');
const commentController = require('../Controllers/CommentController');
var router = express.Router();

router.post('/addComment',commentController.addComment);
router.get('/getComments',commentController.getComments);
router.post('/updateComment/:id', commentController.updateComments); 
router.get('/deleteComment', commentController.deleteComments);
module.exports = router;