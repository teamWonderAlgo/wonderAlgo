const express = require('express');

const router = express.Router();

router.get('/algo', /**middleware */ (req,res)=>{
  //do stuff
  res.status(200).json('get some learneding')
})

router.post('/storeResult', (req, res ) => {
  
  res.status(200).json('stored');
})

module.exports = router