const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892
        
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
        
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

   const authorBornIn1947 = (array) => {
    const pessoaProcurar = array.find((elemento) => elemento.author.birthYear == 1947)
    if (pessoaProcurar)
    {
        console.log(`${pessoaProcurar.author.name} é a primeria pessoa nascida no ano de 1947`)
    }
  }
  authorBornIn1947(books) 


  //2 - Retorne o nome do livro de menor nome.
  let nameBook = "";
  let contarLetras = 100;
  
  const smallerName = (array) => {
      array.forEach((elemento) => {
  /*         nameBook = elemento.name */
          if(contarLetras > elemento.name.length) {
              contarLetras = elemento.name.length
              nameBook = elemento.name  
          }
      })
      return nameBook;
  }
  
  smallerName(books)
  console.log("o menor titulo é: "+nameBook)

  //3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

  
  let contarLetras2 = 100;
  let nomeLivro;
  const vinte6Letras = (array) => {
      array.forEach((elemento) => {
  /*         nameBook = elemento.name */
          if(elemento.name.length === 26) {
              nomeLivro = elemento.name
          }
      })
      return nomeLivro;
  }
  
  vinte6Letras(books)
  console.log("o livro com 26 characteres é: " +nomeLivro)

  //4 - Ordene os livros por data de lançamento em ordem decrescente.
/* 
  function booksOrderedByReleaseYearDesc(array) {
    return array.sort((a,b) => b.releaseYear - a.releaseYear)
  }
  console.log(booksOrderedByReleaseYearDesc(books)) */


/*   5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. */

function everyoneWasBornOnSecXX(array) {
    const sec = array.every((elemento) => 
        elemento.author.birthYear < 2000 && elemento.author.birthYear > 1901
    )
    if(sec)
    {
        console.log("Sec XX: " +true)
    }
    else
    {
        console.log("Sec XX: " + false)
    }
  }
  everyoneWasBornOnSecXX(books)

  //6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

  function someBookWasReleaseOnThe80s(array) {
    const dec = array.some((elemento) => 
        elemento.releaseYear <= 1980 && elemento.releaseYear < 1990
    )
    if(dec)
    {
        console.log("some 80s: " + true)
    }
    else
    {
        console.log("some 80s: " + false)
    }
  }
  someBookWasReleaseOnThe80s(books)

  //7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

  function authorUnique(array) {
    const dataAutor = array.forEach((elemento) => 
    {
        for(let i = 0; i<array.length; i++)
        {
            if (elemento.author.birthYear === array[i].author.birthYear)
            {
                console.log('teste')
            }
        }
        
    })
  }

  authorUnique(books)

  