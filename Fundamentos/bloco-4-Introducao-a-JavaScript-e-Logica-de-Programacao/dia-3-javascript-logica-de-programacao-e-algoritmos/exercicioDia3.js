//crie um algoritmo que retorne o fatorial de 10.
/* let fatorando = 5;
let fatorado = [];
let resultado = fatorando;
for(let i = 1; i <= fatorando; i++)

{
    fatorado.push(i);
}

for(let i = 0; i < fatorado.length-1; i++)
{
    resultado = (fatorado[i])*resultado;
}

console.log(resultado); */

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
 Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como
  exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */
/* 
  let word = 'tryber';
  let inverso = " ";


  for(let i = word.length-1; i >= 0; i --)
  {
    inverso += word[i];
  }

  console.log(inverso);
 */
//3-Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];

let contadorIni = 0;
let contadorFin = 0;
let contadorMen;
let palavra = " ";
let palavraFinal;

for(let i = 0; i < array.length; i ++)
{
    palavra = array[i];
    for(let j = 0; j <= palavra.length; j ++)
    {
        contadorIni = j;
    }
    if(contadorIni > contadorFin)
    {
        contadorFin = contadorIni;
        palavraFinal = array[i];
    }
    else if (contador )

} 
console.log(palavraFinal);