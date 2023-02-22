const mongoose=require("mongoose");
const { Schema } = mongoose;

const todoSchema = new mongoose.Schema({
  title:  String,
  date: { type: Date, default: Date.now },
  tasks:[String]
//   tasks: [{ lists: [String], date: Date }]
  
});

module.exports=mongoose.model("Todo", todoSchema)