const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
/* 5. Implemente a função countAnimals
Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

Observações técnicas

Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino. */

function countAnimals(animal) {
  if (animal == null) {
    return species.reduce((acc, elemento) => {
      acc[elemento.name] = elemento.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).join() === 'specie') {
    const contando = species.find((elemento) => elemento.name === Object.values(animal).join());
    return contando.residents.length;
  }
  if (Object.keys(animal).join() === 'specie,sex') {
    const contandoSex = species.find((e) => e.name === Object.values(animal).join().split(',')[0]);
    const { residents } = contandoSex;
    const Sorted = residents.filter((e) => e.sex === Object.values(animal).join().split(',')[1]);
    const result = Sorted.length;
    return result;
  }
}

console.log(countAnimals({ specie: 'lions', sex: 'female' }));

module.exports = countAnimals;
