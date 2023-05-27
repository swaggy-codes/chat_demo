const express = require("express");
const dummyChats = require("./DummyData/dummyData");

const app = express();

// To check if the server is running...
app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/v1/chat", (req, res) => {
  res.send(dummyChats);
});

// console.log(dummyChats);

app.listen(5001, console.log("The server is running on PORT: 5001"));
