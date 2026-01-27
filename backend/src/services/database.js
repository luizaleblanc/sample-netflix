const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/netflix")
  .then(() => console.log("MongoDB Conectado com Sucesso!"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));
