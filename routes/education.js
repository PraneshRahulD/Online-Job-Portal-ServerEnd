const express = require('express')
const router= express.Router()
const Education = require('../models/education') 

//get all education info
router.get('/education',function (req,res, next) {
    Education.find({}).then(function (education) {
        res.json(education)
    }).catch(next)
})

//get one Education info
router.get('/education/:id',function (req,res, next) {
    Education.findOne({_id: req.params.id}).
    then(function (education) {
        res.json(education)
    }).catch(next)
})
// add new Education info
//router.post
router.post('/education', function (req,res,next) {
    Education.create(req.body).then(function (education) {
        res.json(education)
    }).catch(next)
})

//update.Education info
router.put('/education/:id',function (req,res, next) {
    Education.findOneAndUpdate({_id: req.params.id}, req.body).then(function (education) {
        Education.findOne({_id:req.params.id}).then(function(education) {
            res.json(education)
        })
        }).catch(next)
})

//delete Education info
router.delete('/education/:id',function (req,res, next) {
    Education.findOneAndRemove({_id: req.params.id}).then(function (education) {
        res.json(education)
    }).catch(next)
})


module.exports = router