 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 const { isValidUpdate } = require("../lib/utils")
 const BlogSchema = new Schema({
     title: {
         type: String,
         required: true
     },
     posts: [{
         type: Schema.Types.ObjectId,
         ref: 'Post'
     }]
 }, {
     timestamps: {
         createdAt: 'createdAt',
         updatedAt: 'updatedAt'
     }
 })


 BlogSchema.pre('save', function(next){
     const blog = this;
     if(blog.isNew){
         next()
     } else {
         const allowedUpdates = ['title', 'updatedAt'];
         const updates = blog.modifiedPaths()
         const isValid = isValidUpdate(updates, allowedUpdates);
         next(!isValid ? new Error("Actualizacion invalida, verifique los campos") : undefined)
     }
 })
 module.exports = mongoose.model('Blog', BlogSchema);