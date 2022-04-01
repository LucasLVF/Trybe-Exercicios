const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
/* 9. Implemente a função getOldestFromFirstSpecies
A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro. */
/* O que será avaliado

Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie. */

function getOldestFromFirstSpecies(id) {
  let contadorIdade = 0;
  let contadorI = 0;
  const animalDoFuncionario = employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const animais = species.find((elemento) => elemento.id === animalDoFuncionario);
  const { residents } = animais;
  residents.forEach((elemento, index) => {
    if (elemento.age > contadorIdade) {
      contadorIdade = elemento.age;
      contadorI = index;
    }
  });

  return [residents[contadorI].name, residents[contadorI].sex, residents[contadorI].age];
}
// getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8')
module.exports = getOldestFromFirstSpecies;
