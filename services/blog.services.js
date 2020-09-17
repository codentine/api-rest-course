const BlogModel = require("../models/blog.model")
const { prepareModelForUpdate } = require("../lib/utils")
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

exports.updateBlog = async (blogId, blogInfo) => {
    try {
        const blog = await BlogModel.findById(blogId).exec()
        const blogPrepared = prepareModelForUpdate(blogInfo, blog);
        return await blogPrepared.save() 
    } catch(error) {
        throw  error
    }
}
