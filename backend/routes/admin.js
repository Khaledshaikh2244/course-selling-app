const express = require ('express');
const router = express.Router();




router.post("/signup", async (req,res) => {
 
    try {
    const {username, password} = req.body;
    if(!username || !password ){}
        
  } catch (error) {
    
  }
  
    res.send.status(200).json({
        message : "signup routes",
    })
})


router.post("/signin", (req,res) => {
    res.send.status(200).json({
        message : "signin routes",
    })
})


router.get("/purchase", (req,res) => {
    res.send
})




module.exports = router;


