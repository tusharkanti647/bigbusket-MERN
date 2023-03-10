const { default: mongoose } = require("mongoose");

const usersSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    number:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    conPassword:{
        type:String,
        require:true,
    }
});

const userModel=mongoose.model("users", usersSchema);
module.exports=userModel;