const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const env = require('dotenv')

//initialize the app
const app = express()

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/job-options', { useNewUrlParser: true})
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use(cors())

// initialize routes
app.use('/api', require('./routes/api'))
app.use('/api', require('./routes/users'))
//app.use('/api', require('./routes/personal'))
//app.use('/api', require('./routes/employment'))
//app.use('/api', require('./routes/education'))
app.use('/api', require('./routes/jobseeker'))

env.config();
// error handling middleware
app.use(function (err,req,res,next) {
    res.status(404).send({error:err.message})
})
app.listen(process.env.port || 3000, function () {
    console.log('App is listening at port 3000')
})