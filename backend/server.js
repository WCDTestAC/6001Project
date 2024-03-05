require("dotenv").config();

const express = require("express");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const recordRoutes = require("./routes/recordRoutes");

const app = express();

//socket.io
// const server = app.listen(process.env.PORT, () => {
//   console.log("Server is running on port: " + process.env.PORT);
// });
// const io = socketIO(server);

// io.on("connection", (socket) => {
//   console.log("Client connected");
//   socket.on("message", (message) => {
//     console.log("Message received:", message);
//     io.emit("message", message);
//   });
// });

//serverSide

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
// app.get("/", (req, res) => {
//   res.send("Welcome to MERN app!");
// });
app.use("/api/record", recordRoutes);

//connect to database
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to the DB and Server started on port ",
        process.env.PORT,
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
