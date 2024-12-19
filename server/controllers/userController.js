const User = require('../models/userSchema')
exports.createUser = async (req,res)=>{
    try {
        console.log('Request Body:', req.body);

        const { name, email, password } = req.body;
        

        console.log('Extracted email:', email);
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'Email already exists',
            })
        };

        const newUser = await  User.create({
            fullName:name,
            email,
            password
        })
        console.log(newUser)
        res.status(201).json({
            success:true,
            status: 'success',
            message:"user create success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to create user",
            error: error.message
        })
    }
}
exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:'user not exists'
            });
        }

        if(password!==user.password){
            return res.status(400).json({
                success:false,
                message:'password not match'
            })
        } ;
        return res.status(201).json({
            success:true,
            status: 'success',
            message:"user login success",
            user
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed to login user",
            success:false,
            error: error.message
        })
    }
}