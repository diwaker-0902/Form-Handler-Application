const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/db");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true, // Enable credentials
  })
);

// Middleware to parse the json data
app.use(express.json());
app.use(require("./routes/route"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server is running at port number ", 8000);
});
