const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EmpSchema = new Schema ({
    currentemp:{type:String},
    destination:{type:String},
    jobdesc:{type:String},
    experience:{type:Number},
    previousemp:{type:String},
    jobdes:{type:String},
    exp:{type:String}
})

const Employment = mongoose.model('employment', EmpSchema)

module.exports = Employment;