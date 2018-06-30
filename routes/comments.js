const express = require('express');
const commentController = require('../Controllers/CommentController');
var router = express.Router();

router.post('/addComment',commentController.addComment);


module.exports = router;