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
  console.log("New connectiom");
  socket.emit("hello", { message: "Welcome!!!!" });
  socket.on("resp_client", (data) => {
    console.log(data.message);
  });
});
