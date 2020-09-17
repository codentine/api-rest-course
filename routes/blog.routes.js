const { Router } = require("express");
const router = new Router();
const { findAll, findById, createBlog, updateBlog } = require('../controllers/blog.controller')



router.get("/:id", findById).patch("/:id", updateBlog);
router
    .get("/", findAll)
    .post("/", createBlog);

module.exports = router