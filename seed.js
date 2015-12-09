// Modules & Reqs
var mongoose = require('mongoose'),
  Post = require('./models/post.js');

// Connect to DB
mongoose.connect('mongodb://localhost/postit', function(err) {
  if(err) {
    console.log('Connection error: ', err);
  } else {
    console.log('Connection Successful');
  }
});

// Seed
var post1 = new Post({
  comment: "hello world",
  author: 'people',
});

var post2 = new Post({
  comment: "sim sim salabim",
  author: 'haji',
});

var post3 = new Post({
  comment: "i'll be back",
  author: 't90',
});

var post5 = new Post({
  comment: "i'm rick james bitch",
  author: 'rick james',
});



post1.save(function(err){
  if(err) return handleError(err);
  console.log("saved: " + post1.title);
})

post2.save(function(err){
  if(err) return handleError(err);
  console.log("saved: " + post2.title);
})

post3.save(function(err){
  if(err) return handleError(err);
  console.log("saved: " + post3.title);
})

post4.save(function(err){
  if(err) return handleError(err);
  console.log("saved: " + post4.title);
})

post5.save(function(err){
  if(err) return handleError(err);
  console.log("saved: " + post5.title);
})


console.log('===========================');
console.log('SEEDING COMPLETE: remember to comment out');
console.log('===========================');
