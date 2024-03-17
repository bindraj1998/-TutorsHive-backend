

const express=require("express")
const { default: mongoose } = require("mongoose")
var cors = require('cors')

 
 const Employee=require("./model/employee")
const User=require("./model/loginpage")
const app=express()
app.use(express.json())
app.use(cors())

  const connect =()=>{
    return mongoose.connect("mongodb://localhost:27017/tutorshive")
  }



  app.post("/login",async(req,res)=>{

    try {
           
          const data= await User.findOne({email:req.body.email})
          const password= await User.findOne({password:req.body.password})
          if(data && password ){
            res.send({message:"Login successfully"})
          }
          else{
        res.send({message:"User not found try another email or password"})
          }
    } catch (error) {
           res.send({message:error})
    }
  })


  app.get("/employee",async(req,res)=>{
    try {
        let data=await Employee.find()
         return res.send(data)
    } catch (error) {
           return res.send(error)
    }
  })


  app.post("/employee",async(req,res)=>{
    try {
        let data=await Employee.create(req.body)

        return res.send({message:"employee added successfully"})
    } catch (error) {
           return res.send({message:error})
    }
  })
  app.delete("/employee",async(req,res)=>{
    try {
        let data=await Employee.findByIdAndDelete(req.query.id)

        return res.send({message:"employee deleted successfully"})
    } catch (error) {
           return res.send({message:error})
    }
  })

  app.get("/employe/",async(req,res)=>{
    try {

        let data=await Employee.findById(req.query.id)
           console.log(data)
        return res.send(data)
    } catch (error) {
           return res.send({message:error})
    }
  })


  app.patch("/employee/",async(req,res)=>{
    try {
        let data=await Employee.findByIdAndUpdate(req.query.id,req.body,{new:true})
           console.log(data)
        return res.send(data)
    } catch (error) {
           return res.send({message:error})
    }
  })



app.listen(8080,async function(){
   try {
          await connect()
       console.log("port 8080 running")
   } catch (error) {
    
   }

})
