import mongoose from "mongoose";

export const dbconnection=()=>{
mongoose.connect(process.env.MONGO_URI,{
    dbName: "HOSPITAL_MANAGEMENT_MERN",
}).then(()=>{
    console.log("CONNECTED TO DATABASE !")
}).catch(err=>{
    console.log(`Some Error Occured While Connecting to Databse ${err}`);
});
}