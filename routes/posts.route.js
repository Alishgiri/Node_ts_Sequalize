const router = require('express').Router();

const _ = require('../controllers/posts.controller');

router.get('/', _.getAllPosts);
router.post('/create', _.createPost);

module.exports = router;