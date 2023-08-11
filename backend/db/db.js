const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
 
const connectionString = process.env.mongodbConnection


 const mongoConnection = mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{

    console.log('connected to mongodb successfully')
})

.catch((error)=>{
console.log(error)
 

})
module.exports = mongoConnection