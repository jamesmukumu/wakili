const express = require('express')
const client = require('../schema/schema')

const Case = require('../schema/caseschema')
const router = express.Router()

// post method to put clients info to database
router.post('/client',async(req,res)=>{

try {
    const clientData = new client({
    Firstname:req.body.Firstname,
    Secondname:req.body.Secondname,
    phoneNumber:req.body.phoneNumber,
    age:req.body.age,
    idNumber:req.body.idNumber
    
    })
    const actualValue = await clientData.save()
    res.json({message:'Client has been saved'})
} catch (error) {
    res.json({error:'client has not been saved....try again'})
}


})
// to filter a client based on firstname
router.get('/clientlist',async(req,res)=>{
const filteredClientlist = req.query.Firstname
try {
    const clientlist = await client.find({Firstname:filteredClientlist})
    res.json(clientlist)
} catch (error) {
    console.log(error)
}
})


//filterby Secondname
router.get('/secondname',async(req,res)=>{
    const filteredClient = req.query.Secondname
    try {
        const clientlist = await client.find({Secondname:filteredClient})
        res.json(clientlist)
    } catch (error) {
        console.log(error)
    }
    })
    



// to find only one client based on first name
router.get('/firstname',async(req,res)=>{

try {
    const clientName = req.query.Firstname
    const foundClient = await client.findOne({Firstname:clientName})

    if(!foundClient){
        res.json({error:'Sorry client cannot be found'})
    }
    else{
        res.json(foundClient)
    }
    
} catch (error) {
    res.json({error:'internal server problem'})
    
}


})

// to display all clients 
router.get('/allclients',async(req,res)=>{
try {
   
   const allClientlist = await client.find()
   res.json(allClientlist)
} catch (error) {
    console.log(error)
}



})
// trying to find a client with his associated case
//get by id number

router.get('/id',async(req,res)=>{
    
try {
    
    const wantedIdnumber = req.query.idNumber
    
    const IDNumber = await client.find({idNumber:wantedIdnumber})
    res.json(IDNumber)
} catch (error) {
    error
}


})



module.exports = router


