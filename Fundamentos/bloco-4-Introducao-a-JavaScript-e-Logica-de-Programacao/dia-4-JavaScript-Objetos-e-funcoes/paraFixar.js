/* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */

/* let player =
{
    name: 'Marta',
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log("A jogadora " + player.name + player.lastName +  " tem " + 
player.age + " anos de idade");

console.log("A jogadora" + player.name + player.lastName + "foi eleita a melhor do mundo por 6 vezes" +
 player.bestInTheWorld)

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver +
" medalhas de prata") */

//==================================================================================================================

//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for( let i in names)
  {
      console.log("ola " + names[i]);
  }

//2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let i in car)
  {
      console.log(i , car[i])
  }