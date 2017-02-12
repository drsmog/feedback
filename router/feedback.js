const router = require('express').Router();

var tfs = require('tfs_api_wrapper')({
    instance: '172.17.111.16:8080/tfs',
    projectName: 'testproject',
    collectionName: 'DefaultCollection',
    tfsApiVersion: '2.0',
    userName: 'isvanidze',
    password: 'Tfsuser123#'
});

router.get('/', function(req, res, next) {
    res.send('hellow from router');
});


router.post('/', function(req, res, next) {
    let newFeedback = req.body;

    tfs.createLinkedWorkItem({
            projectName: 'testproject',
            workItemTypeName: 'Task',
            iterationName: 'Sprint 3',
            title: newFeedback.title,
            description: newFeedback.description,
            parentWorkItemId: '15'
        })
        .then(function(result) {
            console.log('Status Success');
            console.log(result);
        })
        .catch(function(err) {
            console.error(err.message);
        });


    res.send();
});


module.exports = router;
