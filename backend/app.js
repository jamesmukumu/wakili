const express = require('express')

const dotenv = require("dotenv")


const path = require('path')
dotenv.config()

const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())


//inorder to use cyclic
app.use(express.static(path.join(__dirname,"./frontend/dist")))


app.get("*",(req,res)=>{

  res.sendFile(path.join("./frontend/dist/index.html"))
})


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