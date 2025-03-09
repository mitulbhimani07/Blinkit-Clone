import sendEmail from '../config/sendEmail.js';
import UserModel from '../model/user.model.js';
import verifyEmailTemplate from '../utils/VerifyEmailTemplet.js';
import bcrypt from 'bcryptjs';
export async function registerUserController (req, res) {
    try {
        let {name,email,password} = req.body;
        if (!name || !email || !password) {
           return res.status(400).json({message : "provide name, email, password", error : true, success : false});
            
        } 
        let user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({message : "User already exists", error : true, success : false});
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        const payload = {
            name ,
            email , 
            password : hashPassword
        }
        const newUser = new UserModel(payload)
        const save = await newUser.save();
        console.log(save._id);
        
        const verifyEmailLink =`${process.env.FRONTED_URL}/verify-email?code=${save?._id}`;
        const verifyEmail = await sendEmail({
            sendTo : email,
            subject : 'Verify Email From Blinkit',
            html : verifyEmailTemplate({
                name,
                url : verifyEmailLink
            })
        })
        return res.status(200).json({message : "User Register successfully", error : false, success : true, data : save});

    } catch (error) {
        console.log(error);
            return res.status(500).json({message : error.message || error, error : true,succsess : false});
    }
}
export async function verifyEmailController (req, res) {
    try {
        const {code} = req.body
        const user = await UserModel.findOne({_id: code})
        if (!user) {
            return res.status(400).json({message : "User not found", error : true, success : false});
        }
        const update = await UserModel.updateOne({_id : code},
            {
                verify_email : true 
            }
        )
        return res.status(200).json({message : "Email verified successfully", error : false, success : true, data : update
        });
    } catch (error) {
     return res.status(500).json({message : error.message || error, error : true,succsess : false});   
    }
}

// login controller 
