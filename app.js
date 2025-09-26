//pass= JzSMDyGBdGlALNcq
const express = require ("express");
const mongoose = require ("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:JzSMDyGBdGlALNcq@cluster0.cj14l0e.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)));