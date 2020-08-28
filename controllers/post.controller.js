const PostService = require("../services/post.services")

const genericResponse = {
    data: {}
  }
exports.findAll = async (req, res, next) => {
    try {
        const posts = await PostService.findAll()
        const response = Object.assign({}, genericResponse, { data: { posts }})
        res.status(200).json(response).end()
    } catch(error) {
        next(error) 
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const { body } = req
        const posts = await PostService.createPost(body)
        const response = Object.assign({}, genericResponse, { data: { posts }})
        res.status(200).json(response).end()
    } catch(error) {
        next(error)
    }
}