const express = require('express')
const bcrypt = require('bcrypt')
const Admin = require('../schema/admin')


const router = express.Router()

router.post('/register',async(req,res)=>{

    
try {
const saltrounds = 10
const hashedpassword = await bcrypt.hash(req.body.password,saltrounds)


    const adminData = new Admin({
    Username:req.body.Username,
    Email:req.body.Email,
    password:hashedpassword
    
    })

      await adminData.save()
    res.json({message:'registered'})
} catch (error) {
    
}

})

router.post('/login',async(req,res)=>{
    const loginPassword = req.body.password
    
    
    try {
        const usernameFound = await Admin.findOne({Username:req.body.Username})
        if(!usernameFound){
            res.json({error:'UserName invalid'})
        }
        
        
       const foundPassword = await bcrypt.compare(loginPassword,usernameFound.password)

if(!foundPassword){
    res.json({error:'invalid password....try again'})
}else{
    res.json({message:'you have successfully logged in'})
}

    } catch (error) {
        error
    }})




module.exports = router