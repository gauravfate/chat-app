import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js'

// const app = express();      // we only use it once it is the entry point for express
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());    // to parse the incoming request with json payloads (from req.body)
app.use(cookieParser())     // used to parse the cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// app.get('/', (req, res) => {
//     res.send('hellow world!');
// })


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is Running on Port ${PORT}`)
})