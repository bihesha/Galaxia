const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const authenticate = require("./middleware/authMiddleware.js")

//Initializing the port number
const PORT = process.env.PORT || 8070;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//database and server connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL).then(() => {
    console.log("MongoDB connection successfully...!");
    app.listen(PORT, () => {
        console.log(`server is up and running on port number: ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})

//user management
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);

const authRouter = require('./routes/authRoutes.js');
app.use("/auth", authRouter);