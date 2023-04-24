const express = require("express");
const cors=require("cors")
const mongooseConnectDB = require("./mongodb");
const apis = require("./routes/apis")
const students = require("./routes/students")
const payments = require("./routes/paymentsroute")
payments
const { createServer } = require("http");
require("dotenv").config();
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    console.log("We are live and connected");
    console.log(socket.id);
  });


const port = 3000;

app.use(express.json())
app.use(cors(
  {
    origin:"*"
  }
));

app.use("/auth", apis);
app.use("/students", students);
app.use("/payments", payments);


mongooseConnectDB();
httpServer.listen(port, () => {
    console.log("Server is running at port " + port);
  });
