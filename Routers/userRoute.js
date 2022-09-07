const express = require('express');
const user = require("../models/user");

const router = express.Router();

//create routes

router.post("/user", async (req, res) => {
    console.log(req.body)
    const data = new user(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            success: "error",
            message: "user not registerd....",
        
        })
    }else{
        res.json({
            status: "success",
            message: "User successfully registered....",
            data: result,
        })
    }
})


//get records
router.get("/user", async(req, res) =>{
    try {
        const result = await user.find()
        if(!result){
            res.json({
                status: "error",
                message: "no record found...."
            })
        }else{
            res.json({
                status: "success",
                data: result,
            })
        }
    } catch (error) {
            res.json({
                status: "error",
                message: "There was an error trying to register user..."
            })
    }

})



// single record
router.get("/user/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const result = await user.findById(_id);
        if(!result){
            res.json({
                staus: "error",
                message: "record not found"
            })
        }else{
            res.json({
                status: "success",
                message: "record found",
                data: result,
            })
        }
    }
    catch(e){
        res.send(e)
    }
})



//update
router.put("/user/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const result = await user.findByIdAndUpdate(_id,req.body,{new: true});
        
        if(!result){
            res.json({
                status: "error",
                message: "can't update user, please try again",
                data: result,
            })
        }else{
            res.json({

                status: "success",
                message: "user updated successfully.....",                
                data: result                
            })
        }
    }catch(e){
        res.send(e)
    }
})



//delete
router.delete("/user/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const result = await user.findByIdAndDelete(_id);
        if(!result){
            res.json({
                status: "error",
                message: "can't delete user, please try again",                

                data: result,                

            })
        } else{
            res.json({
                status: "success",
                message: "user updated successfully.....",
            })
        }
    }catch(e){
        res.send(e)
    }
})



module.exports = router;