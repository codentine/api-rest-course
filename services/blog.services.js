const BlogModel = require("../models/blog.model")

exports.findAll = async (username) => {
    try {
        return await BlogModel.find({ username }).populate('posts').exec();
    } catch(error) {
        throw error
    }
}

exports.findById = async (id) => {
    try {
        return await BlogModel.findById(id).populate('posts').exec();
    } catch(error) {
        throw error
    }
}

exports.createBlog = async (blogInfo) => {
    try {
        const newBlog =  new BlogModel({
            ...blogInfo
        })
        return await newBlog.save();
    } catch(error) {
        throw error
    }
}

exports.addPost = async (blogId, post) => {
    try {
        const blog = await BlogModel.findById(blogId).exec()
        blog.posts.push(post)
        await blog.save()
    } catch(error) {
        throw error
    }
}
