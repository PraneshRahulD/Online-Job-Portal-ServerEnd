const mongoose = require('mongoose')
const Schema = mongoose.Schema

 const JobSchema = new Schema({
     id:{ type:Number},
     title:{ type:String },
    // desc:{ type:String},
     //jobdate:{ type:Number },
     role:{ type:String },
     //responsibility:{ type:String },
     cname:{ type: String },
     //experience:{ type: Number },
     salary: { type:Number },
     //position: { type:Number },
     location: { type:String },
     skills: { type:String },
     //degree: { type:String },
     //cinfo: { type:String },
     //etype: { type:String },
     //search: { type:String },
     jobdesc: { type:String }

 })

 const Job = mongoose.model('jobs',JobSchema)
 
 module.exports = Job;