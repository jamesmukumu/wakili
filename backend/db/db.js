const mongoose = require('mongoose')


const connectionString = 'mongodb+srv://jamesmukumu:test1234@cluster0.suh0vt1.mongodb.net/'

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