const router = require('express').Router();

const _ = require('../controllers/comments.controller');

router.post('/create', _.createComment)

module.exports = router;