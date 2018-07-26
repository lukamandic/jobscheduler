const express = require('express');
const router = express.Router();
const validation = require('./middleware/validation');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Jobs were fetched!'
    });
});

router.post('/', validation, (req, res, next) => {
    const job = {
        jobTime: req.body.jobTime,
        jobChannel: req.body.jobChannel,
        jobMessage: req.body.jobChannel
    };
    res.status(201).json({
        message: 'Job was created',
        job: job
    });
});

router.get('/:jobId', (req, res, next) => {
    res.status(200).json({
        message: 'Job details',
        jobId: req.params.jobId
    });
});

router.delete('/:jobId', (req, res, next) => {
    res.status(200).json({
        message: 'Job deleted',
        jobId: req.params.jobId
    });
});

module.exports = router;