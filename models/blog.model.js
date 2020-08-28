 const mongoose = require("mongoose");
 const { Schema } = mongoose;

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

 module.exports = mongoose.model('Blog', BlogSchema);