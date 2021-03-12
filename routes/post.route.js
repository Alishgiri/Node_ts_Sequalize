const router = require('express').Router();

const _ = require('../controllers/post.controller');

router.post('/create', _.createPost)

module.exports = router;