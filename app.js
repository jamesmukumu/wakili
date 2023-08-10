const express = require('express')
const mongoose = require('mongoose')



const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())


try {
    app.use(require('./backend/db/db'))
} catch (error) {
 error   
}
 

try {
    app.use(require('./backend/routes/route'))
    
} catch (error) {
    
}

try {
   app.use(require('./backend/routes/caseroute')) 
} catch (error) {
  console.log(error)  
}

try {
  app.use(require('./backend/routes/admin'))  
} catch (error) {
    error
}

const PORT = 4000
 

app.listen(`${PORT}`,()=>{

    console.log(`server running at ${PORT}`)
})