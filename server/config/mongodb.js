import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGODB_URL){
    throw new Error("MongoDB URI is missing in .env file");
}
// Connect to MongoDB

async function connectDB(){
    try {
       await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("mondodb is not conect",error);
        process.exit(1);
    }
}
export default connectDB;