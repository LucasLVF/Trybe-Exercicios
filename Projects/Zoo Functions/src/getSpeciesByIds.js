const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* //1. Implemente a função getSpeciesByIds
Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids. */
// const animalData = data.species;
function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const animal = [];
  ids.forEach((idAnimal) => {
    animal.push(species.find((elemento) => elemento.id === idAnimal));
  });

  return animal;
}

module.exports = getSpeciesByIds;
