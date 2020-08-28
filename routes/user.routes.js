const { Router } = require('express');
const { signUp, signIn, logout} = require('../controllers/user.controller');
const { restrict } = require("../lib/middlewares/auth.middleware")

const router = new Router()

router
    .post('/signIn', signIn)
    .post('/signUp', signUp)
    .get('/logout', restrict, logout)

module.exports = router;