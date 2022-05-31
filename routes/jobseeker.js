const express = require('express')
const router= express.Router()
const JobSeeker = require('../models/jobseeker') 

//get all jobs
router.get('/jobseeker',function (req,res, next) {
    JobSeeker.find({}).then(function (jobseeker) {
        res.json(jobseeker)
    }).catch(next)
})

//get one job
router.get('/jobseeker/:id',function (req,res, next) {
    JobSeeker.findOne({_id: req.params.id}).
    then(function (jobseeker) {
        res.json(jobseeker)
    }).catch(next)
})
// add new job
//router.post
router.post('/jobseeker', function (req,res,next) {
    JobSeeker.create(req.body).then(function (jobseeker) {
        res.json(jobseeker)
    }).catch(next)
})

//update.job
router.put('/jobseeker/:id',function (req,res, next) {
    JobSeeker.findOneAndUpdate({_id: req.params.id}, req.body).then(function (jobseeker) {
        Job.findOne({_id:req.params.id}).then(function(jobseeker) {
            res.json(jobseeker)
        })
        }).catch(next)
})

//delete job
router.delete('/jobseeker/:id',function (req,res, next) {
    JobSeeker.findOneAndRemove({_id: req.params.id}).then(function (jobseeker) {
        res.json(jobseeker)
    }).catch(next)
})


module.exports = router