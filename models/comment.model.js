const mongoose = require("mongoose")
const { Schema } = mongoose

const CommentSchema = new Schema({
    content: String,
    likes: Number,
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
}, 
{ timestamps: { 
    createdAt: "createdAt", 
    updatedAt: "updatedAt" 
  }
})

module.exports = mongoose.model('Comment', CommentSchema)