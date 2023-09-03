const User = require('../models/user');

exports.createUser = async(req, res)=>{
    try{
        const {user,email, title, department, role } = req.body;

        const newUser = await User.create({
            user,email, title, department, role
        })

        res.status(200).json({
            data : newUser
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}

exports.deleteUser = async(req, res)=>{
    try{
        const {id} = req.params

        await User.findByIdAndDelete(id);

        res.status(200).json({
            message : `id : ${id} \n user deleted`
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}

exports.updateUser = async(req, res)=>{
    try{
        const {id} = req.params
        const {user, email, title, department, role} = req.body;

        const updatedUser = await User.findByIdAndUpdate(
                {_id:id},
                {
                    user,
                    email,
                    title,
                    department,
                    role,
                    updatedAt : Date.now()
                }
            );

        res.status(200).json({
            updatedData : updatedUser
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}

exports.getAllUsers = async(req, res)=>{
    try{
        
        const allUsers = await User.find();

        res.status(200).json({
            data : allUsers
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}
