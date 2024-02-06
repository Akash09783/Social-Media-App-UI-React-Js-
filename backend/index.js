const express = require("express");
const app = express();
const multer = require("multer");
const morgan = require("morgan")
const helmet = require("helmet")
const mongoose = require("mongoose")
// const dotenv = require('dotenv');
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");

const main =async()=>{
 await mongoose.connect("mongodb://localhost:27017/socialls")

}
main()
 
app.use("./Images", express.static(path.join(__dirname, "./Images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});


app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts", postRoute);
app.listen(5000, () => {
    console.log("Backend server is running!");
  });
