// atividade 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers)
//-------------------------------------------------------

// atividade 2
let somador = 0;
for (let i=0; i <numbers.length; i++)
{
    somador = somador + numbers[i]

}
console.log(somador)
//-------------------------------------------------------------

// atividade 3
console.log(somador/10)

//=============================================================

//atividade 4
if (somador/10 > 20)
{
    console.log("valor maior que 20")
}
else
{
    console.log("valor menor ou igual a 20")
}
//=============================================================

//atividade 5
let maiorNumero = 0;
for(let i =0; i < numbers.length; i++)
{
    
    if(maiorNumero < numbers[i])
    {
        maiorNumero = numbers[i]
    }
    else
    {
        maiorNumero = maiorNumero
    }
}
console.log("o maior numero é: " + maiorNumero)
//=============================================================

//atividade 6
let contador =0;
for(let i =0; i < numbers.length; i++)
{
    if(numbers[i] % 2 == 0)
    {
        contador + 0;
    }
    else
    {
        contador++;
    }
}
console.log("Quatidade de numeros impares: " + contador)
//===============================================================

//atividade 7
let menorNumero = 1000;
for(let i =0; i < numbers.length; i++)
{
    
    if(menorNumero > numbers[i])
    {
        menorNumero = numbers[i]
    }
    else
    {
        menorNumero = menorNumero
    }
}
console.log("o menor numero é: " + menorNumero)
//==================================================================

//atividade 8
let arrey = [];
for(let i = 1; i <=25; i++)
{
    arrey.push(i)
}

console.log("arrey de 1 a 25: " + arrey)
//==================================================================

//atividade 9
let arreyDividido = [];
for(let i = 0 ; i < arrey.length; i++)
{
    arreyDividido.push(arrey[i]/2)
}

console.log("arrey dividido: " + arreyDividido);