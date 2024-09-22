const express  = require ('express');
const router =  express.Router();
const userRouter = require ('./user');
const courseRouter = require ('./course');
const adminRouter = require ('./admin');

router.use("/user",userRouter);
router.use("/course",courseRouter);
router.use("/admin",adminRouter);

module.exports = router;
