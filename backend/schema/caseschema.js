const mongoose = require('mongoose')

const client = require('./schema')

const caseSchema = new mongoose.Schema({
    caseType:{type:String,required:true},
    caseDescription:{type:String,required:true},
    caseOpened:{type:Date,default:Date.now},
    clientID: { type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true },
    magistrateName:{type:String,required:true},
highcourt:{type:String,required:true},
location:{type:String,required:true},
courtType:{type:String,required:true} 
    
    
    }) 
    const Case = mongoose.model('Case',caseSchema)
    module.exports = Case 