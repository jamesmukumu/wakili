const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

 const adminSchema = new mongoose.Schema({
Username:{type:String,required:true},
Email:{type:String,required:true,unique:true},
password:{type:String,required:true,minlength:[4,'minimum password is 4 charachters']}


 })


 const Admin = mongoose.model('Admin',adminSchema)

 module.exports = Admin 