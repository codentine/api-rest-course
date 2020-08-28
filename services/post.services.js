const PostModel = require('../models/post.model')
const BlogService = require('./blog.services')
exports.findAll = async () => {
    try {
        return await PostModel.find().populate('blog').exec()
    } catch(error) {
        throw error
    }
}

exports.createPost = async (postInfo) => {
    try {
        const blog = await BlogService.findById(postInfo.blog)
        if(!blog) throw { message: "Blog not Found", status: 404 }
        const post = new PostModel({ ...postInfo })
        const savedPost = await post.save()
        await BlogService.addPost(postInfo.blog, savedPost)
        return savedPost
    }catch(error){
        throw error
    }
}