const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

//router
const categoriesRouter = require("./app/api/v1/categories/router");
const errorHandlerMiddleware = require("./app/middleware/handler-error");

const v1 = "/api/v1/cms";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome To Samina API",
  });
});

app.use(v1, categoriesRouter);
app.use(errorHandlerMiddleware);

module.exports = app;
