const mongoose = require("mongoose");

const temporada = new mongoose.Schema({
  temporada_id: {
    type: mongoose.type.ObjectId,
    ref: "Filme",
  },
  titulo: String,
  descricao: String,
  numero: Number,
  capa: String,
});

module.exports = mongoose.model("Temporada", temporada);
