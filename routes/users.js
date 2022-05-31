const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')


const User = require('../models/users')


//get all users
router.get('/users', function(req, res, next) {
    User.find({}).then(function(users){
        res.json(users)
    }).catch(next)
    
})

// get one job
router.get('/users/:id',function(req, res, next) {
    User.findOne({_id: req.params.id})
        .then(function(user){
            res.json(user)
    }).catch(next)
    
})

// add new job
router.post('/users', function(req, res, next) {
    User.create(req.body)
        .then(function(user){
            res.json(user)
    }).catch(next)
})

router.post('/login', function(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) { return res.sendStatus(403); }
        user.comparePassword(req.body.password, (error, isMatch) => {
          if (!isMatch) { return res.sendStatus(403); }
          const token = jwt.sign({ user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
          res.status(200).json({ token });
        });
    });
})

// update job
router.put('/users/:id', function(req,res,next){
    User.findOneAndUpdate({_id: req.params.id}, req.body).then(function (user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.json(user)
        })
    }).catch(next)
})
//delete job
router.delete('/users/:id', function(req, res, next) {
    User.findOneAndRemove({_id: req.params.id})
        .then(function(user){
            res.json(user)
    }).catch(next)
    
})

module.exports = router;
