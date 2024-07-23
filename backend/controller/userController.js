import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utilis/jwtoken.js";

export const patientRegister = catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role,

    }= req.body;
    if(
       ! firstName ||
       ! lastName ||
       ! email ||
       ! phone ||
       ! password ||
       ! gender ||
       ! dob ||
       ! nic ||
       ! role ){
        return next(new ErrorHandler("Please Fill  Full Form !",400));
       }
       let user =await User.findOne({email});
       if(user){
        return next(new ErrorHandler("User Already Registered !",400));
       }
       user= await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role,
       });
       generateToken(user,"User Registered !",200,res);
    //    res.status(200).json({
    //     success:true,
    //     message:"User Registered",
    //    });
});
export const login = catchAsyncErrors(async(req,res,next)=>{
    const {email, password, confirmPassword, role}=req.body;
    if(!email|| !password|| !confirmPassword|| !role){
        return next(new ErrorHandler("Kindly Provide All Required Credentials !",400));
    }
    if(password!== confirmPassword){
        return next(new ErrorHandler("Password ANd Confirm Password Didn't Matches ",400));
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Password Or Email",400));
    } const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password Or Email",400));
    }
    if(role!==user.role){
        return next(new ErrorHandler("User with Opted Role is Not Registered Till Now ",400));
    }
    generateToken(user,"User Logged in Successfully !",200,res);
    // res.status(200).json({
    //     success:true,
    //     message:"User Logged in Successfully",
    //    });
});
export const adminRegister=catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,

    }= req.body;

    if(
        ! firstName ||
        ! lastName ||
        ! email ||
        ! phone ||
        ! password ||
        ! gender ||
        ! dob ||
        ! nic 
        ){
         return next(new ErrorHandler("Please Fill  Full Form !",400));
    }
    const isRegistered=  await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler( `${isRegistered.role} with this Email Already Exists!`));
    }
    const admin=await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role:"Admin",
    });
    res.status(200).json({
        success:true,
        message:"New Admin Registered !!",
    });
});