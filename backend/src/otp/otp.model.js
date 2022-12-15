const {Schema,model} =require("mongoose")

const OtpSchema=new Schema({
    otp:{type:Number,required:true},
    email:{type:String,required:true}
})

const OtpModel=model("otp",OtpSchema);


module.exports=OtpModel;