import mongoose from "mongoose";


const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" ☑️ MongoDB is connected");
        
    } catch (error) {
        console.error("❌ MongoDB connection error",error);
        process.exit(1);
    }
}


export default ConnectDB;