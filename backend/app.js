const express = require('express')

const dotenv = require("dotenv")


const path = require('path')
dotenv.config()

const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())








try {
    app.use(require('./db/db'))
} catch (error) {
 error   
}
 

try {
    app.use(require('./routes/route'))
    
} catch (error) {
  error  
}

try {
   app.use(require('./routes/caseroute')) 
} catch (error) {
  console.log(error)  
}

try {
  app.use(require('./routes/admin'))  
} catch (error) {
    error
}
const PORT = process.env.PORT || 8080
 

app.listen(`${PORT}`,()=>{

    console.log(`server running at ${PORT}`)
})