const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const groupRoutes = require("./routes/groups");
const memberRoutes = require("./routes/members");
const paymentRoutes = require("./routes/payments");

const app = express();
app.use(logger("dev"));

const port = 3000;

var mongoDb = "mongodb://127.0.0.1/mydb";
mongoose.connect(
  mongoDb,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.use("/groups", groupRoutes);
app.use("/members", memberRoutes);
app.use("/payments", paymentRoutes);
