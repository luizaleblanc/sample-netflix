const express = require("express");
const router = express.Router();
const _ = require("underscore");
const Filme = require("../models/filme");
const Temporada = require("../models/temporada");

router.get("/home", async (req, res) => {
  try {
    let filmes = await Filme.find({});
    let finalFilmes = [];

    for (let filme of filmes) {
      const temporadas = await Temporada.find({ filme_id: filme._id });
      const newFilme = { ...filme._doc, temporadas };
      finalFilmes.push(newFilme);

      finalFilmes = _.shuffle(finalFilmes);
      const principal = finalFilmes[0];

      const sessoes = _.chunk(finalFilmes, 5);
      res.json({ error: false, principal, sessoes });
    }
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
