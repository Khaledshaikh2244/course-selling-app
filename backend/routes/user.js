const express = require ('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const jwt  = require ('jsonwebtoken');
const User  = require ("../models/userSchema");




router.post("/signup", async (req,res) => {
 try {
    const {username,password,firstname, lastname} =  req.body;
    if(!username || !password|| !firstname || !lastname){
      return res.status(400).json({msg:  "Data fields should not be empty"});
    }
    
   const isExistingUser =await User.findone({username:  username});
    if (isExistingUser) {
        return  res.status(400).json({msg : "user already exists !"})
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser =  new User.create({
        username,
        password : hashedPassword,
        firstname,
        lastname,
    });

    await newUser.save();
    res.status(200).json({msg : "Signup Successfully"});

 } catch (error) {
    console.error('error' ,error);
    res.status(500).json({msg : "Internal Server Error"});
 }
 
});


router.post("/signin",async(req,res) => {
  try {
    const {username,password} = req.body;
    if(!username || !password){
       return res.status(400).json({msg : "Bad requests"});
        } 
    const isExistingUser =  await User.findone({username:username});
    if(!isExistingUser){
        return res.status(401).json({msg : "user does not exists"});
    }

    const isValidPassword = await bcrypt.compare(password, isExistingUser.password)
    if (!isValidPassword) {
       return res.status(401).json({msg : "invalid password"});
    }

    res.status.send(200).json({msg : "sign up successfully"});

    } catch (error) {
        console.error('error', error);
        res.status(500).json({msg:  "Internal Server error"});
    }
    })


    router.get("purchases", async (req,res) => {
        res.send
    })




module.exports = router;


