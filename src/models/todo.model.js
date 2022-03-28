const mongoose = require|("mongoose");

const todoschema = new mongoose.Schema({
 title:{type:String,reuired:true},
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true}
},{
    versionKey:false,
    timestamps:true
});

const todo = mongoose.model("todo",todoschema);

module.exports=todo;

