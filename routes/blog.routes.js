const { Router } = require("express");
const router = new Router();
const { findAll, findById, createBlog } = require('../controllers/blog.controller')



router.get("/:id", findById);
router
    .get("/", findAll)
    .post("/", createBlog);

module.exports = router