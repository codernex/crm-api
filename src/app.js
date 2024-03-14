const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./lib/globalErrorHandler");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("crm api is running....");
});

// handling all route which is not found
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
