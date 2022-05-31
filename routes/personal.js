const express = require('express')
const router= express.Router()
const Personal = require('../models/personal') 

//get all personal info
router.get('/personal',function (req,res, next) {
    Personal.find({}).then(function (personal) {
        res.json(personal)
    }).catch(next)
})

//get one Personal info
router.get('/personal/:id',function (req,res, next) {
    Personal.findOne({_id: req.params.id}).
    then(function (personal) {
        res.json(personal)
    }).catch(next)
})
// add new personal info
//router.post
router.post('/personal', function (req,res,next) {
    Personal.create(req.body).then(function (personal) {
        res.json(personal)
    }).catch(next)
})

//update.personal info
router.put('/personal/:id',function (req,res, next) {
    Personal.findOneAndUpdate({_id: req.params.id}, req.body).then(function (personal) {
        Personal.findOne({_id:req.params.id}).then(function(personal) {
            res.json(personal)
        })
        }).catch(next)
})

//delete personal
router.delete('/personal/:id',function (req,res, next) {
    Personal.findOneAndRemove({_id: req.params.id}).then(function (personal) {
        res.json(personal)
    }).catch(next)
})


module.exports = router