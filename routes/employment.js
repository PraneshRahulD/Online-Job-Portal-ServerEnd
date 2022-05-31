const express = require('express')
const router= express.Router()
const Employment = require('../models/employment') 

//get all  Employment info
router.get('/employment',function (req,res, next) {
    Personal.find({}).then(function (employment) {
        res.json(employment)
    }).catch(next)
})

//get one Employment  info
router.get('/personal/:id',function (req,res, next) {
    Employment.findOne({_id: req.params.id}).
    then(function (employment) {
        res.json(employment)
    }).catch(next)
})
// add new Employment info
//router.post
router.post('/employment', function (req,res,next) {
    Employment.create(req.body).then(function (employment) {
        res.json(employment)
    }).catch(next)
})

//update.Employment info
router.put('/employment/:id',function (req,res, next) {
    Employment.findOneAndUpdate({_id: req.params.id}, req.body).then(function (employment) {
        Employment.findOne({_id:req.params.id}).then(function(employment) {
            res.json(employment)
        })
        }).catch(next)
})

//delete employment info
router.delete('/employment/:id',function (req,res, next) {
    Employment.findOneAndRemove({_id: req.params.id}).then(function (employment) {
        res.json(employment)
    }).catch(next)
})


module.exports = router