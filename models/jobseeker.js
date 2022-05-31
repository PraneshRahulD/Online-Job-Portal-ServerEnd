const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSeekerSchema = new Schema ({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    mobileno:{type:Number},
    address:{type:String},
    workexp:{type:Number},
    skills:{type:String},
    resume:{type:String},
    college:{type:String},
    passedon:{type:String},
    graduated:{type:String},
    graduateschool:{type:String},
    yrsattended:{type:String},
    skills:{type:String},
    certification:{type:String},currentemp:{type:String},
    destination:{type:String},
    jobdesc:{type:String},
    experience:{type:Number},
    previousemp:{type:String},
    jobdes:{type:String},
    exp:{type:String}
})

const JobSeeker= mongoose.model('education',JobSeekerSchema)

module.exports = JobSeeker;