const mongoose = require("mongoose");

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  tipo: String,
  capa: String,
  logo: String,
  thumb: String,
  descricao: String,
  generos: [String],
  elenco: [String],
  cenas_momentos: [String],
});

module.exports = mongoose.model("Filme", FilmeSchema);
