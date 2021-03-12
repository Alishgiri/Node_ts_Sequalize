const router = require('express').Router();

const _ = require('../controllers/users.controller');

router.post('/create', _.createUser)

module.exports = router;