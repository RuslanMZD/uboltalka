const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema=new Schema({

googleId:String,
email:String


})




const User = mongoose.model('users',userSchema);

module.exports=User;