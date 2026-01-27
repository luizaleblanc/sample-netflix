const mongoose = require("mongoose");

const episodio = new mongoose.Schema({
  temporada_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Temporada",
  },
  titulo: String,
  descricao: String,
  numero: Number,
  capa: String,
});

module.exports = mongoose.model("Episodio", episodio);
