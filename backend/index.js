const express = require("express");
const app = express();
const morgan = require("morgan")
const helmet = require("helmet")
const mongoose = require("mongoose")
const dotenv = require('dotenv');






app.listen(5000, () => {
    console.log("Backend server is running!");
  });
