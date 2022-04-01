const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

/* 2. Implemente a função getAnimalsOlderThan
Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada. */

function getAnimalsOlderThan(animal, age) {
  const animais = species.filter((elemento) => elemento.name === animal);

  const idadeMin = animais.every((elemento) =>
    elemento.residents.every((bicho) => bicho.age >= age));
  return idadeMin;
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
