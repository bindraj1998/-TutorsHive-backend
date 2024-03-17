const mongoose=require("mongoose")



const employeeschema=new mongoose.Schema({
    // Name	Email	Salary	address	designation	Edit	delete




       name:{type:String,required:true},
       email:{type:String,required:true},
       salary:{type:Number,required:true},
       address:{type:String,required:true},
       designation:{type:String,required:false},
       password:{type:String,required:false}


})

module.exports=mongoose.model("employee",employeeschema)