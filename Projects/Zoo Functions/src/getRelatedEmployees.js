const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];
/* 4. Implemente a função getRelatedEmployees
Considerando a boa prática de dividir o código em partes menores, apresentamos a função getRelatedEmployees em que você deverá dividí-la em duas funções:

1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!". */

function isManager(id) {
  if (managers.find((elemento) => elemento === id)) {
    return true;
  }

  return false;
}

function getRelatedEmployees(managerId) {
  if (managers.find((elemento) => elemento === managerId)) {
    const funcionarios = employees.filter((elemento) => elemento.managers.includes(managerId));
    const fullName = [];
    for (let i = 0; i < funcionarios.length; i += 1) {
      fullName.push(`${funcionarios[i].firstName} ${funcionarios[i].lastName}`);
    }
    console.log(fullName);
    return fullName;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

getRelatedEmployees(olaId);
module.exports = { isManager, getRelatedEmployees };
