import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDB")

    } catch (error) {
        console.log("Error connecting to mongodb,", error.message)
    }
};

export default connectToMongoDB