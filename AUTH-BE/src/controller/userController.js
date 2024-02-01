import UserModel from '../models/userModel.js'
import Auth from '../helper/auth.js'
import Randomstring from 'randomstring'

const getAllUsers = async(req,res)=>{
    try {
        let users = await UserModel.find({},{password:0})
        res.status(200).send({
            message:" all User datas fetch successful",
            users
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error in fetching all users"
        })
    }
}

const getUserById = async(req,res)=>{
    try {
        let user = await UserModel.findById({_id:req.params.id},{password:0})
        res.status(200).send({
            message:"User data fetch by id successful",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const createUser = async(req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if(!user){
            req.body.password = await Auth.createHash(req.body.password)        //generating hash for password
            req.body.randomString = await Randomstring.generate(20)
            let newUser = await UserModel.create(req.body)
            res.status(200).send({
                message : "User created successfully"
            })
        }else{
            res.status(400).send({
                message : `User with ${req.body.email} already exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in creating user",
            error : error.message
        })
    }
}

const login = async(req, res) => {
    try {
        const {email,password} = req.body
        // console.log(req.body);
        const user = await UserModel.findOne({email:email})
        if(user){
            if(await Auth.hashCompare(password,user.password)){
                const token = await Auth.createToken({
                    name:user.name,
                    email:user.email,
                    role:user.role
                })
                res.status(200).send({
                    message:"Login successfull",
                    token,
                    role:user.role,
                    id :user._id
                })
            }else{
                res.status(400).send({
                    message: "Inncorrect password"
                })
            }
        }else{
            res.status(400).send({
                message:`User with ${req.body.email} does not exists`
            })
        }        
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in logging in",
            error : error.message
        })
    }
}
export default {
    createUser,
    login,
    getAllUsers,
    getUserById
}