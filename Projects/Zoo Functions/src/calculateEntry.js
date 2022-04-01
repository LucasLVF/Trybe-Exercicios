const data = require('../data/zoo_data');
/* 6. Implemente a função calculateEntry
Esta função irá receber um array de visitantes no seguinte formato: */
/* Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

Pessoas com idade menor que 18 anos são classificadas como crianças (child);
Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }. */

/* Após terminar a implementação da função countEntrants você deverá utilizá-la para implementar a função calculateEntry. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado. */
const contador = { child: 0, adult: 0, senior: 0 };
function countEntrants(entrants) {
  contador.child = entrants.filter((elemento) => elemento.age < 18).length;
  contador.adult = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50).length;
  contador.senior = entrants.filter((elemento) => elemento.age >= 50).length;
  return contador;
}
let total = 0;
function calculateEntry(entrants) {
  if (entrants == null) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  total = child * 20.99 + adult * 49.99 + senior * 24.99;

  return total;
}
module.exports = { calculateEntry, countEntrants };
