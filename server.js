// SETUP//////////////////////////////////////////////////////////////////

// DEPENDENCIES
var express       = require('express'),
    morgan        = require('morgan'),
    mongoose      = require('mongoose'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser');

var app = express();

// PORT & LISTENER
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Silence please...');
setTimeout(function(){console.log('Curtains up...' + '\n' + 'Server started on: ' + port)}, 1050);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

// MONGO
mongoose.connect('mongodb://localhost/postit');

// MODELS
var Post = require('./models/post');

// ROUTES/////////////////////////////////////////////////////////////////

// TEST ROUTE
// app.get('/test', function(req, res){
//   res.send('Sim Sim Salabim');
// });

// Index
app.get('/post', function(req, res){
  Post.find().then(function(posts){
    console.log(posts + '\n' + (typeof posts));
      res.send(posts);
  });
}); // close index

// Read
app.get('/posts/:id', function(req, res){
  Post.findBydId(req.params.id).then(function(post){
      console.log(posts + '\n' + (typeof posts));
      res.send(posts)
  });
}); // close read

// Create
app.post('/posts', function(req, res){
  var post = new Post(req.body);
  post.save(function(err){
    if (err){
      console.log('ERROR MSG: ' + err);
    } else {
      console.log('...Post saved...');
      res.send(post)
    };
  });
}); // close create

// Update
app.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: req.body
  }, function(err, post){
    res.send(post);
  });
}) // close update

// Delete
app.delete('/posts/:id', function(req, res){
  Post.findOneAndRemove({_id: req.params.id}, function(err){
    if (err) {console.log(err)};
    console.log('...Post has been deleted...');
    res.send('Post removed');
  });
}); // close delete

// TEMP STUFF && GARBAGE//////////////////////////////////////////////////



















