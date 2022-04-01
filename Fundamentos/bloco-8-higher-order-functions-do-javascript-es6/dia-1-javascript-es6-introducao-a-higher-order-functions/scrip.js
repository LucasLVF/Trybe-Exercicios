/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const newEmployees = (informacoes) => {
    const employees = {
      id1: informacoes('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: informacoes('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: informacoes('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const informacoes = (nome) => 
  {
    let arrumandoNome = nome.replace(/ /g, '_').toLowerCase()
    let dados = 
    {
        nome: `${nome}`,
        email: `${arrumandoNome}@trybe.com`
    }
    return dados;
  }

  console.log(newEmployees(informacoes))

 /*  2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
  let numeroGanhador;
  let teste
 const verificador = (numeroApostado) =>
 {     
    if (numeroApostado === numeroGanhador)
    {
        teste = true
        return teste;
    }
    else
    {
        teste = false
        return teste;
    }
 }

 const sorteador = (numeroApostado, verificador) => 
 {
     numeroGanhador = Math.floor(Math.random() * 5 + 1)
     verificador(numeroApostado)
     
     if (teste === true)
     {
         console.log(`Parabéns você ganhou, o numero sorteado foi ${numeroGanhador}`)
     }
     else
     {
         console.log(`Tente novamente, o numero sorteado foi ${numeroGanhador}`)
     }
 }


 console.log(sorteador(3, verificador))
 

/*  3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

let contadorCertas = 0;
let contadorErradas = 0;
const hof = (gabarito,respostas,corretor) => 
{
    corretor(gabarito,respostas)
    console.log(`você acertou ${contadorCertas} perguntas e errou ${contadorErradas}, sua nota foi ${contadorCertas - contadorErradas}`)
}

const corretor = (gabarito, respostaAluno) =>
{
    for( i= 0; i < gabarito.length ; i++)
    {
        if (gabarito[i] === respostaAluno[i])
        {
            contadorCertas++
        }
        else if (respostaAluno[i] === 'N.A')
        {
            contadorCertas += 0
        }
        else 
        {
            contadorErradas += 0.5
        }
    }
}
console.log(hof(RIGHT_ANSWERS,STUDENT_ANSWERS,corretor))