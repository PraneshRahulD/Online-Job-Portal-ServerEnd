const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PersonalSchema = new Schema ({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    mobileno:{type:Number},
    address:{type:String},
    workexp:{type:Number},
    skills:{type:String},
    resume:{type:String}
})

const Personal = mongoose.model('personal',PersonalSchema)
 
module.exports = Personal;