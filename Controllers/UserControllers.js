const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {

    let user;
    //Get all users
    try{
        user = await User.find();
    }catch (err) {
        console.log(err);
    }
    //not found
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    //Display all users
    return res.status(200).json({ user });
};

//data Insert
const addUsers = async(req, res, next) => {

    const {name,gmail,age,address} = req.body;

    let user;

    try{
        user = new User({name, gmail, age, address});
        await user.save();
    }catch (err) {
        console.log(err);
    }
    //not insert users
    if (!user){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({ user });
};

//Get by Id
const getById = async (req, res, next) => {

    const  id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch (err) {
        console.log(err);
    }

    //not available users

    if (!user){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({ user });
}

//Update User Details
const updateUser = async (req, res, next) => {

    const  id = req.params.id;
    const {name,gmail,age,address} = req.body;

    let user;

    try{
        user = await User.findByIdAndUpdate(id,
            {name: name, gmail: gmail, age: age, address: address});
            user = await user.save();
    }catch(err) {
        console.log(err);
    }

    if (!user){
        return res.status(404).json({message:"Unable to Update User Detyails"});
    }
    return res.status(200).json({ user });

};

//Delete User Details
const deleteUser = async (req, res, next) => {
    const  id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id)
    }catch (err) {
        console.log(err);
    }

    if (!user){
        return res.status(404).json({message:"Unable to Delete User Detyails"});
    }
    return res.status(200).json({ user });
}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;