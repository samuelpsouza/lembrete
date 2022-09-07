const express = require('express');
const router = express.Router();

const PostItController = require('../controllers/postit.ctrl');
const postItParam = "/:id";

router.get(postItParam, PostItController.findAllPostIts);
router.patch(postItParam, PostItController.updatePostIt);
router.post(postItParam, PostItController.createPostIt);
router.delete(postItParam, PostItController.deletePostIt);

module.exports = router;