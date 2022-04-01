const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
/* 3. Implemente a função getEmployeeByName
Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas */

function getEmployeeByName(employeeName) {
  if (employeeName == null) {
    return {};
  }
  const ficha = employees.find((elemento) => elemento.firstName === employeeName
  || elemento.lastName === employeeName);
  return ficha;
}

module.exports = getEmployeeByName;
