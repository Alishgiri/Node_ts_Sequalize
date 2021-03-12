const router = require('express').Router();

const _ = require('../controllers/posts.controller');

router.post('/create', _.createPost)

module.exports = router;