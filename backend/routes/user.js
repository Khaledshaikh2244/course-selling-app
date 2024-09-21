const express = require ('express');
const router = express.Router();




router.post("/signup", (req,res) => {
    res.send.status(200).json({
        message : "signup routes",
    })
})


router.post("/signin", (req,res) => {
    res.send.status(200).json({
        message : "signin routes",
    })
})


router.get("purchases", (req,res) => {
    res.send
})




module.exports = router;


