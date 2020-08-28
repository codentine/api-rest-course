const { Router } = require("express");
const router = new Router();
const PostController = require('../controllers/post.controller')

router
    .get("/", PostController.findAll)
    .post("/", PostController.createPost)

module.exports = router;