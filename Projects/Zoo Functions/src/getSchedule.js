const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function achandoAnimais(dia) {
  const animal = species.filter((elemento) => elemento.availability.includes(dia));
  const nomeDoAnimal = animal.map((elemento) => elemento.name);
  return nomeDoAnimal;
}

const atracoes = ['lions', 'otters', 'elephants', 'snakes',
  'frogs', 'bears', 'tigers', 'penguins', 'giraffes'];
const Tuesday = achandoAnimais('Tuesday');
const Wednesday = achandoAnimais('Wednesday');
const Thursday = achandoAnimais('Thursday');
const Friday = achandoAnimais('Friday');
const Saturday = achandoAnimais('Saturday');
const Sunday = achandoAnimais('Sunday');
const dias = ['Tuesday', 'Wednesday', 'Thursday'];
const dias2 = ['Friday', 'Saturday', 'Sunday', 'Monday'];
const officeTuesday = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`;
const officeWednesday = `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`;
const officeThursday = `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`;
const officeFriday = `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`;
const officeSaturday = `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`;
const officeSunday = `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`;
/* 8. Implemente a função getSchedule
A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

Observações técnicas

Analise os testes unitários para entender os retornos que são esperados para esta função;
Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas. */

function monday(dia) {
  if (dia === 'Monday') {
    const objeto = {
      Monday: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
    return objeto;
  }
}
function tuesday(dia) {
  if (dia === 'Tuesday') {
    const objeto = {
      Tuesday: { officeHour: officeTuesday, exhibition: achandoAnimais(dia) },
    };
    return objeto;
  }
}
function wednesday(dia) {
  if (dia === 'Wednesday') {
    const objeto = {
      Wednesday: { officeHour: officeWednesday, exhibition: achandoAnimais(dia) },
    };
    return objeto;
  }
}
function thursday(dia) {
  if (dia === 'Thursday') {
    const objeto = {
      Thursday: { officeHour: officeThursday, exhibition: achandoAnimais(dia) },
    };
    return objeto;
  }
}
function friday(dia) {
  if (dia === 'Friday') {
    const objeto = {
      Friday: { officeHour: officeFriday, exhibition: achandoAnimais(dia) },
    };
    return objeto;
  }
}
function saturday(dia) {
  if (dia === 'Saturday') {
    const objeto = {
      Saturday: { officeHour: officeSaturday, exhibition: achandoAnimais(dia) },
    };
    return objeto;
  }
}
function sunday(dia) {
  if (dia === 'Sunday') {
    const objeto = {
      Sunday: { officeHour: officeSunday, exhibition: achandoAnimais(dia) },
    };
    return objeto;
  }
}
const chamandoDias = (day) => {
  if (day === 'Tuesday') return tuesday(day);

  if (day === 'Wednesday') return wednesday(day);

  if (day === 'Thursday') return thursday(day);
};

function chamandoDias2(day) {
  if (day === 'Monday') return monday(day);

  if (day === 'Friday') return friday(day);

  if (day === 'Saturday') return saturday(day);

  if (day === 'Sunday') return sunday(day);
}

function geral() {
  const objeto = {
    Tuesday: { officeHour: officeTuesday, exhibition: Tuesday },
    Wednesday: { officeHour: officeWednesday, exhibition: Wednesday },
    Thursday: { officeHour: officeThursday, exhibition: Thursday },
    Friday: { officeHour: officeFriday, exhibition: Friday },
    Saturday: { officeHour: officeSaturday, exhibition: Saturday },
    Sunday: { officeHour: officeSunday, exhibition: Sunday },
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return objeto;
}

function procuraAnimal(param) {
  return species.find((elemento) => elemento.name === param).availability;
}
function t(param) {
  return param == null || param !== dias || param !== dias2;
}

function getSchedule(scheduleTarget) {
  if (dias.includes(scheduleTarget)) return chamandoDias(scheduleTarget);

  if (dias2.includes(scheduleTarget)) return chamandoDias2(scheduleTarget);

  if (atracoes.includes(scheduleTarget)) {
    return procuraAnimal(scheduleTarget);
  }
  if (t(scheduleTarget)) return geral();
}

module.exports = getSchedule;
