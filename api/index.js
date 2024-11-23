import express from 'express'
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const ConnectMongoose = mongoose.connect(process.env.MONGO)
ConnectMongoose.then(() => console.log("MongoDB is connected")).catch(err => console.error('error'))
const app = express();

app.listen(5000, () => {
    console.log('Server is runing on Port 5000');
})