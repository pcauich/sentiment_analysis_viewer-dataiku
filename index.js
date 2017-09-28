var express = require('express');
var app = express();

// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB
mongoose.connect('mongodb://dataiku_plenum:dataiku_plenum@ds131854.mlab.com:31854/dataiku_plenum',{ useMongoClient: true, promiseLibrary: global.Promise });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Mongoose Schema definition
var Schema = mongoose.Schema;

var JsonSchema = new Schema({
    user: String,
    type: Schema.Types.Mixed
});
 
// Mongoose Model definition
var Json = mongoose.model('JString', JsonSchema, 'dataiku_tweets_sentiment_analysis');

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

var path = require ('path');
app.use(express.static(path.join(__dirname + '/public')));

// views is directory for all template files
app.set('views', path.join(__dirname + '/views/pages'));
app.set('view engine', 'pug');
//app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { title: '@Dataiku Sentiment Analysis' });
});

//routes/index.js
/* GET layers json data. */
app.get('/maplayers', function (req, res) {
    Json.find({}, function (err, docs) {
        res.json(docs);
    });
});

/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: '@Dataiku sentiment Analysis' });
});

/* GET json data. 
app.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        Json.findOne({ name: req.params.name },{}, function (err, docs) {
            res.json(docs);
        });
    }
});*/
 
/* GET Map page. */
app.get('/map', function(req,res) {
    res.render('map', {
            lat : 28.480589,
            lng : -47.896526
    });
});

module.exports = app;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});