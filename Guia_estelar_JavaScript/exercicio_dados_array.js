/*
DESAFIO:
    Buscando e contando dados em Array.

---> Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//número de categorias

function quantidade_de_categorias() {
    let categoria = booksByCategory.length
    return categoria
}
console.log(`O número de categorias é igual a ${quantidade_de_categorias(booksByCategory)}.`)


//número de livros na categoria "Riqueza"
function numero_livros_riqueza() {
    let numero_livros_r = booksByCategory[0].books.length
    return numero_livros_r
}
console.log(`O número de livros na categoria "Riqueza" é igual a ${numero_livros_riqueza(booksByCategory)}.`)  


//número de livros na categoria "Inteligência Emocional"
function numero_livros_IE() {
    let numero_livros_int = booksByCategory[1].books.length
    return numero_livros_int
}
console.log(`O número de livros na categoria "Inteligência Emocional" é igual a ${numero_livros_IE(booksByCategory)}.`)
/*
function quantidade_de_livros_por_categoria(nomeDaCategoria) {
    let indice = booksByCategory.books.indexOf()                   //descobrir o indice da categoria através do nome da categoria
    return booksByCategory[indice].books.length
}
*/

//número de livros em cada categoria
function quantidadeDeLivrosPorCategoria() {
    for (var i = 0; i < booksByCategory.length; i++) {
      console.log(`A quantidade de livros na categoria ${booksByCategory[i].category} é igual a ${booksByCategory[i].books.length}.`);
    }
  }
quantidadeDeLivrosPorCategoria()


//Contar o número de autores
listaDeAutores = []
for (let i = 0; i < booksByCategory.length; i++) {
  for (let j = 0; j < booksByCategory[i].books.length; j++) {
    if (!listaDeAutores.includes(booksByCategory[i].books[j].author)) {
      listaDeAutores.push(booksByCategory[i].books[j].author)
    }
  }
}
console.log(listaDeAutores)
console.log(`A quantidade de autores é igual a ${listaDeAutores.length}.`)

/*
//array com autores da categoria Riqueza
let author_r1 = booksByCategory[0].books[0].author;
console.log(author_r1)

let author_r2 = booksByCategory[0].books[1].author;
console.log(author_r2)

let author_r3 = booksByCategory[0].books[2].author;
console.log(author_r3)

let array_r = author_r3.split(" e ");

if (author_r2 != author_r1 && author_r2 != author_r3) {
    array_r.push(author_r2)
} 

if (author_r3 !== author_r1) {
    array_r.push(author_r1)
}
console.log(array_r) 

//array com autores da categoria Inteligencia
let author_i1 = booksByCategory[1].books[0].author;
console.log(author_i1)

let author_i2 = booksByCategory[1].books[1].author;
console.log(author_i2)

let author_i3 = booksByCategory[1].books[2].author;
console.log(author_i3)

let array_i = [author_i1];

if (author_i2 !== author_i1 && author_i2 !== author_i3) {
    array_i.push(author_i2)
} 

if (author_i3 !== author_i1) {
    array_i.push(author_i3)
}
console.log(array_i)

let array_final = array_r.length + array_i.length
console.log(`O número de autores total é ${array_final}.`)
*/


/////Mostrar livros de Augusto Cury
for (let i = 0; i < booksByCategory.length; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
  
    if (booksByCategory[i].books[j].author == 'Augusto Cury') {
     console.log(`Augusto Cury escreveu: ${booksByCategory[i].books[j].title}.`)
    }
   }
  }


/////Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
function livroDoAutor(nomeDoAutor) {
    for (let i = 0; i < booksByCategory.length; i++) {
        for (let j = 0; j < booksByCategory[i].books.length; j++) {
    
       if (booksByCategory[i].books[j].author == nomeDoAutor) {
         console.log(`O autor ${nomeDoAutor} escreveu: ${booksByCategory[i].books[j].title}.`)
        }
       }
      }
   return nomeDoAutor 
}

livroDoAutor("T. Harv Eker")