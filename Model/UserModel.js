const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String, // Data type
        required:true, // Validate
    },

    gmail:{
        type:String, 
        required:true, 
    },  

    age:{
        type:Number, 
        required:true, 
    },

    address:{
        type:String, 
        required:true, 
    }
});

module.exports = mongoose.model(
    "UserModel", //file name
    userSchema  //function name
)