var express = require("express");
const { connectDb } = require("./src/config/connect-db");
const port = process.env.PORT;
var app = express();

var todoRouter = require("./src/route/todoRoute")

app.use(express.json());

connectDb();

app.use("/", todoRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });