const database = require("../services/database");
const Filme = require("../models/filme");
const Usuario = require("../models/usuario");
const usuariosJSON = require("../data/usuarios.json");
const addFilmes = async () => {
  try {
    for (let filme of filmesJSON) {
      console.log(`Inserindo ${filme.titulo}`);
      await new Filme(filme).save();
    }
    console.log("Final do script");
  } catch (error) {
    console.log(error.message);
  }
};

addFilmes();
