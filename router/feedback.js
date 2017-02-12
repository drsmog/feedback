const router = require('express').Router();


var tfs = require('tfs_api_wrapper')({
    instance: '172.17.111.16:8080/tfs',
    projectName: 'testproject',
    collectionName: 'DefaultCollection',
    tfsApiVersion: '2.0',
    userName: 'isvanidze',
    password: 'Tfsuser123#'
});


const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, './uploads/');
    },
    filename: function(request, file, callback) {

        callback(null, file.originalname + '-' + request.params.feedbackId);
    }
});
var upload = multer({
    storage: storage
});

router.get('/', function(req, res, next) {
    res.send('hellow from router');
});



router.post('/:feedbackId/files', upload.any(), function(req, res, next) {
   console.log('complate!');
    res.send();
});

router.post('/', upload.any(), function(req, res, next) {
    let newFeedback = req.body;



    tfs.createWorkItem({
            projectName: 'testproject',
            workItemTypeName: 'Product Backlog Item',
            iterationName: 'Sprint 3',
            title: newFeedback.title,
            description: newFeedback.description

        })
        .then(function(itemId) {

            res.json(itemId);

        })
        .catch(function(err) {
            console.error(err.message);
            res.status(500).send('cant create new work item');
        });

});



module.exports = router;
