const {Schema,model} =require("mongoose")


const userSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:Number,required:true,unique:true},
    role: { type: String, enum: ["user", "admin"], default: "user" },
},{timestamps:true})

const userModel=model("user",userSchema);


module.exports=userModel;