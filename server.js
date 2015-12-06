// SETUP//////////////////////////////////////////////////////////////////

// DEPENDENCIES
var express       = require('express'),
    morgan        = require('morgan'),
    mongoose      = require('mongoose'),
    cookieParser  = require('cookie-parser');

var app = express();

// PORT & LISTENER
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Silence please...');
setTimeout(function(){console.log('Curtains up...' + '\n' + 'Server started on: ' + port)}, 1050);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cookieParser());

// MONGO
mongoose.connect('mongodb://localhost/postit')

// ROUTES/////////////////////////////////////////////////////////////////

// TEST ROUTE
app.get('/test', function(req, res){
  res.send('Sim Sim Salabim');
});



// TEMP STUFF && GARBAGE//////////////////////////////////////////////////
