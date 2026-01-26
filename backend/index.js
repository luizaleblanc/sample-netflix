const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const routes = require("./src/routes/main.routes.js");

mongoose
  .connect("mongodb://localhost:27017/netflix-clone")
  .then(() => {
    console.log("MongoDB Conectado com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar no MongoDB:", err);
  });

app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

app.listen(3000, () => {
  console.log("O servidor roda localmente na porta 3000");
});
