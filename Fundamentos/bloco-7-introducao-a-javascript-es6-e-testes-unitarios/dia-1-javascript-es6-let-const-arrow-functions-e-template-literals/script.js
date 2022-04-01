/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);
 */

  const teste = escopo => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)'
      escopo === (true) ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) : console.log(`${elseScope}`)   
  }
  teste(false)

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

  console.log(`${oddsAndEvens[5]} ${oddsAndEvens[1]} ${oddsAndEvens[2]} ${oddsAndEvens[4]} ${oddsAndEvens[3]} ${oddsAndEvens[0]}`); // será necessário alterar essa linha 😉

  //usando o sort
  console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);