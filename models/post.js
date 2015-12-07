var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

  comment: String,
  author: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
