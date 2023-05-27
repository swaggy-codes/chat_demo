const express = require("express");
const dotenv = require("dotenv");
const dummyChats = require("./DummyData/dummyData");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

// To check if the server is running...
app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/v1/chat", (req, res) => {
  res.send(dummyChats);
});

app.get("/api/v1/chat/:id", (req, res) => {
  const singleChat = dummyChats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

// console.log(dummyChats);

app.listen(5001, console.log(`The server is running on PORT: ${PORT}`));
