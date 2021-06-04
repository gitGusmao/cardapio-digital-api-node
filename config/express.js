const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");
const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://gusmao:6XnZb14cx5muquZq@cluster0.nqr8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connect mongoDB");
    });

  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set("port", process.env.PORT || config.get("server.port"));

  // MIDDLEWARES
  app.use(bodyParser.json());

  // ENDPOINTS
  consign({ cwd: "api" })
    .then("data")
    .then("controllers")
    .then("routes")
    .into(app);

  return app;
};
