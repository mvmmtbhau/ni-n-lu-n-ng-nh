const express = require('express');
const posts = require('../controllers/PostController');

const router = express.Router();

router.route("/")
    .get(posts.findAll);

module.exports = router;