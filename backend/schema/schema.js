const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
Firstname:{type:String,required:true},
Secondname:{type:String,required:true},
phoneNumber:{type:Number,required:true},
dateCreated:{type:Date,default:Date.now},
idNumber:{type:Number,required:true},
age:{type:Number,required:true}


})



const client = mongoose.model('client',clientSchema)

module.exports = client