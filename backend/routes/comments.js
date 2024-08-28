const express = require('express');
const router = express.Router();

const {
    createComment,
    editComment,
    deleteComment,
} = require('../controllers/commentController');

router.post(`/projects/:projectId/comments`, createComment);

router.patch(`/projects/:projectId/comments`, editComment);

router.delete(`/projects/:projectId/comments/`, deleteComment);

module.exports = router;