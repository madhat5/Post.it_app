var mongoose = require('mongoose');

var postSchema = new.mongoose.Schema({

  comment: String,
  gif: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
