import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://prakashranjan45890:Prakashranjan45890@cluster0.nsofv.mongodb.net/food-del").then(()=>console.log("DB connected"))
}



