const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require('./db/conn')

const PORT =process.env.PORT



// Middleware

const middleware = (req, res, next) => {
  console.log(`Hello This Is Middleware`);
  next();
};

// mongodb code
// mongodb+srv://princedilzaib:<password>@cluster0.1s6e1lb.mongodb.net/?retryWrites=true&w=majority

app.get("/", (req, resp) => {
  resp.send("Hello World from the server");
});

app.get("/about", middleware, (req, resp) => {
  resp.send("Hello About World from the server");
});

app.get("/contact", (req, resp) => {
  resp.send("Hello Contact World from the server");
});

app.get("/signin", (req, resp) => {
  resp.send("Hello Login World from the server");
});

app.get("/signup", (req, resp) => {
  resp.send("Hello Registration World from the server");
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}.`);
});
