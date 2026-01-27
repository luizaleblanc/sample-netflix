const express = require("express");
const cors = require("cors");
const app = express();

require("./src/services/database");

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
