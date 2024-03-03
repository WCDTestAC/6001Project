require("dotenv").config();

const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("Welcome to MERN app!");
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port ", process.env.PORT);
});
