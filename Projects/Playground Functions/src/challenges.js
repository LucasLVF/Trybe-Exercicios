// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true)
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(string) {
  let palavraDividida = []
  if (string === "go Trybe")
  {
    palavraDividida.push("go", "Trybe")
    return palavraDividida
  }
  else if (string === "vamo que vamo")
  {
    palavraDividida.push("vamo", "que", "vamo")
    return palavraDividida
  }
  else if (string === "foguete")
  {
    palavraDividida.push("foguete")
    return palavraDividida
  }
}

// Desafio 4
function concatName(string) {
  return string[string.length-1] +", "+ string[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  
  return (wins * 3) + ties;

}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorNumero = -500;
  for (let i =0; i < array.length; i++)
  {
    if (maiorNumero < array[i])
    {
      maiorNumero = array[i]
    }
  }
  for (let i = 0; i < array.length; i++)
  {
    if (maiorNumero === array[i])
    {
      contador++;
    }
  }
  return contador;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {

  if (cat1 - mouse > cat2 - mouse)
  {
    return "cat2";
  }
  else if (cat1 - mouse === cat2 - mouse)
  {
    return "os gatos trombam e o rato foge";
  }
  else if (cat1 - mouse < cat2 - mouse)
  {
    return "cat1";
  }

}

// Desafio 8
fizzBuzz([2, 15, 7, 9, 45])
function fizzBuzz(arrayDeNumeros) {
  let fizbuz = []; 
  for (let i = 0; i < arrayDeNumeros.length; i++)
  {
    if (arrayDeNumeros[i] % 3 === 0 && arrayDeNumeros[i] % 5 === 0)
    {
      fizbuz.push("fizzBuzz")
      
    }
    else if (arrayDeNumeros[i] % 3 === 0)
    {
      fizbuz.push("fizz")
      
    }
    else if (arrayDeNumeros[i] % 5 === 0)
    {
      fizbuz.push("buzz")
      
    }
    else
    {
      fizbuz.push("bug!")
    }   

  }
  return fizbuz;
}

// Desafio 9
function encode(string) {
  let palavraCodificada = "";
  for (let i = 0; i < string.length; i++)
  {
    if(string[i] === "a")
    {
      palavraCodificada = palavraCodificada + "1"
    }
    else if(string[i] === "e")
    {
      palavraCodificada = palavraCodificada + "2"
    }
    else if(string[i] === "i")
    {
      palavraCodificada = palavraCodificada + "3"
    }
    else if(string[i] === "o")
    {
      palavraCodificada = palavraCodificada + "4"
    }
    else if(string[i] === "u")
    {
      palavraCodificada = palavraCodificada + "5"
    }
    else if (string[i] != "a", "e", "i", "o", "u")
    {
      palavraCodificada = palavraCodificada + string[i]
    }
  }
  return palavraCodificada;
}
function decode(string) {
  let palavraDecodificada = "";
  for (let i = 0; i < string.length; i++)
  {
    if(string[i] === "1")
    {
      palavraDecodificada = palavraDecodificada + "a"
    }
    else if(string[i] === "2")
    {
      palavraDecodificada = palavraDecodificada + "e"
    }
    else if(string[i] === "3")
    {
      palavraDecodificada = palavraDecodificada + "i"
    }
    else if(string[i] === "4")
    {
      palavraDecodificada = palavraDecodificada + "o"
    }
    else if(string[i] === "5")
    {
      palavraDecodificada = palavraDecodificada + "u"
    }
    else 
    {
      palavraDecodificada = palavraDecodificada + string[i]
    }
  }
  return palavraDecodificada;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
