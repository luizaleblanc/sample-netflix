const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("./src/services/database");

const filmeRoutes = require("./src/routes/filmes.routes");
const usuarioRoutes = require("./src/routes/usuarios.routes");
const episodioRoutes = require("./src/routes/episodios.routes");

/// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/// Routes
app.use("/", filmeRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/episodios", episodioRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
