const router = require('express').Router();

const _ = require('../controllers/comment.controller');

router.post('/create', _.createComment)

module.exports = router;