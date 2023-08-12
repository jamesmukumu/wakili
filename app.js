const express = require('express')

const dotenv = require("dotenv")


dotenv.config()

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
  error  
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
const PORT = process.env.PORT || 8080
 

app.listen(`${PORT}`,()=>{

    console.log(`server running at ${PORT}`)
})