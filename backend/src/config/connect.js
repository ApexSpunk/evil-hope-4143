const mongoose=require("mongoose");

const connect=async()=>{
  return  mongoose.connect(process.env.MONGO_URI)
}

module.exports=connect;