const express = require("express");
const app = express();
const morgan = require("morgan")
const helmet = require("helmet")
const mongoose = require("mongoose")
// const dotenv = require('dotenv');
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")


const main =async()=>{
 await mongoose.connect("mongodb://localhost:27017/socialls")

}
main()
 
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.listen(5000, () => {
    console.log("Backend server is running!");
  });
