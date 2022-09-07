const asyncHandler = require('express-async-handler');
const User = require('../Models/User');
const generateToken = require('../Util/generateToken');

const registerUser = asyncHandler(async (req, res) =>{
    const {email, password} = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists !!');
    }

    const user = await User.create({
        email,
        password
    });

    if(user){
        res.status(201).json({
            _id : user._id,
            email : user.email,
            token : generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error("Error Occured !!!");
    }
    
    res.json({
        email
    });

});

const authUser = asyncHandler(async (req, res) =>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if( user && (await user.matchPassword(password))){
        res.json({
            _id : user._id,
            email : user.email,
            token : generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error('Email or Password is incorrect');
    }

});

module.exports = {registerUser, authUser};