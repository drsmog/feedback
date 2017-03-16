const express = require('express');
const feedbackRouter = require('./router/feedback');
const bodyParser = require('body-Parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/publicFeedback/dist'));


app.use('/api/feedback',feedbackRouter);

app.get('*',function (req,res,next) {
  res.sendfile('index.html');
});

app.listen(process.env.PORT,function () {
  console.log('start Listening');
});

