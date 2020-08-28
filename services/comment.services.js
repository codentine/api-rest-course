const CommentModel = require("../models/comment.model");

exports.findAll = async () => {
    try {
        return await CommentModel.find().exec()
    } catch (error) {
        throw error
    }
}