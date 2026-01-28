const database = require("../services/database");
const Filme = require("../models/filme");
const Temporada = require("../models/temporada");
const Episodio = require("../models/episodio");
const episodio = require("../models/episodio");

const addTempsEps = async () => {
  try {
    console.log("Buscando séries no banco de dados...");

    const series = await Filme.find({ tipo: "serie" });

    console.log(`${series.length} séries encontradas.`);

    for (let serie of series) {
      console.log(`\n Processando SÉRIE: ${serie.titulo} (${serie._id})`);

      const numTemporadas = Math.floor(Math.random() * 5) + 1;

      for (let i = 1; i <= numTemporadas; i++) {
        console.log(`   ↳ Inserindo Temporada ${i} de ${numTemporadas}`);
        const temporadaCriada = await new Temporada({
          filme_id: serie._id,
          titulo: `Temporada ${i}`,
        }).save();

        const numEpisodios = Math.floor(Math.random() * 5) + 1;

        for (let x = 1; x <= numEpisodios; x++) {
          console.log(`      ↳ Inserindo Ep ${x}/${numEpisodios}`);

          await new Episodio({
            temporada_id: temporadaCriada._id,
            titulo: `Episódio ${x}`,
            numero: x,
            descricao: `Sinopse do episódio ${x} da série ${serie.titulo}. Lorem ipsum dolor sit amet.`,
            capa: "https://image.tmdb.org/t/p/original/9fwJ5ZOF14XjxDsIPDvEvnIo9r0.jpg",
          }).save();
        }
      }
    }

    console.log("\n Script finalizado com sucesso!");
  } catch (error) {
    console.log("Erro:", error.message);
  } finally {
    setTimeout(() => {
      const mongoose = require("mongoose");
      mongoose.connection.close();
    }, 1000);
  }
};

addTempsEps();
