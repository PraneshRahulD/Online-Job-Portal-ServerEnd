const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EducationSchema = new Schema ({
    college:{type:String},
    passedon:{type:String},
    graduated:{type:String},
    graduateschool:{type:String},
    yrsattended:{type:String},
    skills:{type:String},
    certification:{type:String}
})

const Education = mongoose.model('education',EducationSchema)

module.exports = Education;