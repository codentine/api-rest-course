const { Router } = require("express");

const { findAll } = require("../controllers/comment.controller")

const router = new Router();

router.get("/",findAll)

module.exports = router;