import express from "express";
import path from "path";
import socketIO from "socket.io";
const app = express();

const list = ["José", "Marcos", "Antônio"];

// console.log(list);
// setTimeout(() => {
//   list.push("Pedro");
//   console.log(list);
// }, 3000);

// app.get("/list", (req, res) => {
//   res.send(list);
// });

app.use("/", express.static(path.resolve(__dirname, "..", "public")));

const server = app.listen(5000, () => {
  console.log("Server running port 5000");
});

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("New connection");
  const random = Math.random() * 10;
  //Emit for one connection
  //socket.emit("hello", { message: "Welcome!!!!" });

  //Emit for all connection
  //io.emit("hello", { message: `Welcome!!!! ${random}` });

  //Send a message to all connections, except for the one you are currently connected to
  socket.broadcast.emit("hello", { message: "New connetion" });
  //Receive message front end
  // socket.on("resp_client", (data) => {
  //   console.log(data.message);
  // });
});
