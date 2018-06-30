const express = require('express');
const commentController = require('../Controllers/CommentController');
var router = express.Router();

router.post('/addComment',commentController.addComment);
router.get('/getComments',commentController.getComments);
router.get('/getByid', commentController.getById);
module.exports = router;