import mongoose from "mongoose";

const mongodbURI = process.env.mongodbURI as string;

const connectToDatabase = () => mongoose.connect(mongodbURI, {});
// .then(() => console.log("Connected to MongoDB"))
// .catch((err) => console.error("Failed to connect to MongoDB:", err));

export { connectToDatabase };
