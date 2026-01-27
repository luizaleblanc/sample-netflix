const database = require("../services/database");

const Usuario = require("../models/usuario");
const usuariosJSON = require("../data/usuarios.json");
const addUsers = async () => {
  try {
    for (let usuario of usuariosJSON) {
      await new Usuario(usuario).save();
    }
    console.log;
    ("Final do script");
  } catch (error) {
    console.log(error.message);
  }
};

addUsers;
