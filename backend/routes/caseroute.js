const express = require('express')
const Case = require('../schema/caseschema')
const router = express.Router()


router.post('/cases',async(req,res)=>{
  try {
      const caseData = new Case({
  caseType:req.body.caseType,
  caseDescription:req.body.caseDescription,
  clientID:req.body.clientID,
  magistrateName:req.body.magistrateName,
  location:req.body.location,
  highcourt:req.body.highcourt,
  courtType:req.body.courtType
  
      })
  const caseValue = await caseData.save()
  res.json({message:'case Saved'})
  } catch (error) {
    res.json({error:'error in saving case'})
  }



})

router.get('/caseslist',async (req,res)=>{
    const filterByCase = req.query.caseType
try {
    const allCasesList = await Case.find({caseType:filterByCase})
    res.json(allCasesList)
} catch (error) {
    console.log(error)
}


})


router.get('/casetype',async(req,res)=>{
const getCasebyType = req.query.caseType
try {
    const resultCasetype = await Case.findOne({caseType:getCasebyType})
    if(!resultCasetype){
res.json({error:'case type not found check again.....'})
    }
    else{
        res.json(resultCasetype)
    }
} catch (error) {
    console.log(error)
}


})

router.get('/casedetails',async(req,res)=>{

try {
    const clientid = req.query.clientID
    const clientcasesdetails = await Case.find({clientID:clientid})
    if(!clientcasesdetails){
        res.json({error:'ID cannot be found hence case cannot be found'})
        
    }
    else{res.json(clientcasesdetails)}
    
} catch (error) {
    error
}

})


router.get('/allcases',async(req,res)=>{
try {
    const allcases = await Case.find()
    const foundcases = res.json(allcases)
    
} catch (error) {
    error
}

})


module.exports = router