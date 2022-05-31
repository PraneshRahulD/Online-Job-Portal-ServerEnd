const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    username: {type: String},
    email: {type: String, require: true},
    password: {type: String, required: true},
    //role: {type: String, require: true},
    mobile:{type:Number},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    pincode:{type:Number},
    country:{type:String},
    years:{type:Number},
    skills:{type:String},
    resume:{type:String},
    curemp:{type:String},
    designation:{type:String},
    desc:{type:String},
    months:{type:Number},
    preemp:{type:String},
    desc1:{type:String},
    months1:{type:Number},
    college:{type:String},
    passed:{type:String},
    graduated:{type:String},
    qualifications:{type:String},
    certifications:{type:String},
    date: {type: Date, default: Date.now}
})

UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { return next(err); }
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) { return next(error); }
        user.password = hash;
        next();
      });
    });
});
  
UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) { return callback(err); }
      callback(null, isMatch);
    });
};
  
  // Omit the password when returning a user
UserSchema.set('toJSON', {
    transform: (doc, ret, options) => {
      delete ret.password;
      return ret;
    }
});

const User = mongoose.model('users', UserSchema)

module.exports = User;
