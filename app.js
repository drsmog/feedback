const express = require('express');
const feedbackRouter = require('./router/feedback');
const bodyParser = require('body-Parser');
var tfs = require('tfs_api_wrapper')({
    instance: '172.17.111.16:8080/tfs',
    projectName: 'testproject',
    collectionName: 'DefaultCollection',
    tfsApiVersion: '2.0',
    userName: 'isvanidze',
    password: 'Tfsuser123#'
});
var app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/publicFeedback/dist'));

app.use('/api/feedback',feedbackRouter);

app.get('*',function (req,res,next) {
  res.sendfile('index.html');
});

app.listen(3000,function () {
  console.log('start Listening');
});
