/* PROTOTYPE
objetos herdam recursos uns dos outros
*/

/* TYPE CONVERSION (typecasting)
alteração esplicita de um tipo de dado para outro tipo

TYPE COERSION
alteração feita pelo JS de um tipo de dado para outro tipo
*/

console.log('9' + 5) //printa 95, aconteceu uma concatenação, o JS trasforma o 5 em uma string (type coersion)

console.log(Number('9') + 5) // printa 14, pois através da função Number alterei a string para um número


/* Manipulando string e números
transforma string em número e número em string.*/

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

/* Contar caracteres de uma palavra e números
usa .length para fazer a conta
em caso de números é preciso transforma-lo em uma string*/
let conte = "Ananda"
console.log(conte.length)

let numero = 123456789
console.log(String(numero).length)

/* Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
usa-se a função ou método .toFixed()  (que é uma função atrelada ao objeto por isso pode ser chamada de método) para colocar 2 casas decimais
colocar dentro do parentese o número de casas decimais desejada
para trocar ponto por vígula usa a função .replace(".", ",") atrelada à função anterior (primeiro argumento entre "o que quer trocar" segundo argumento "pelo que quer trocar")
*/

let numbery = 14.255896311548
console.log(numbery.toFixed(2).replace(".", ",")) // com a vígula o dado vira uma string

/* Transformar maiúcula em minúscula
usa a função .toUpperCase(), para o contrário usa .toLowerCase()
*/

let word = "Ananda Oliveira Muniz"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

/* Separando string
Para separar um texto por espaços, pode-se usar o método .split(" ")
que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços.
Transformar o array em um texto separado pelo que quiser .join("COLOCAR AQUI PELO QUE QUER SEPARAR")
*/

let frase = "Na maresia a gente vai coladinho."
console.log(frase.split(" "))
console.log(frase.split("a"))
let myArray = frase.split(" ") //para transformar uma string num array
console.log(myArray.join(".")) //join() é um método para um Array


/*Encontrar palavras em textos
usa o método .includes("AQUI ESCREVE A PALAVRA QUE QUER PROCURAR") esse método retorna true ou false
letras maiúsculas e minúsculas fazem diferença*/

console.log(frase.includes("amor"))
console.log(frase.includes("gente"))

/*Criar ARRAY com construtor
*/

let array_ = ['a', 'b', 'c']
console.log(array_)

let novoArray = new Array('a', 'b', 'c') //Array com construtor
console.log(novoArray)

/*Contar elementos no Array
usa o método .length*/

console.log(['a', 'b', 'c'].length)


/*Transformar string em array
Usa o método .from(), que espera como argumento uma string
*/

let word_ = "manipulação"
console.log(Array.from(word_)) //o Array já é um objeto e pode atrelar a ele um método

/* Manipulando Arrays
- adicionar um item no fim: .push("O QUE QUER ADICIONAR")
- adicionar um item no começo: .unshift("O QUEQUER ADICIONAR")
- remover item do fim: .pop()
- remover item do começo: .shift()
- remover 1 ou mais itens em qualquer posição: .splice(INDEX DO QUE QUER TIRAR, QUANTOS ELEMENTOS QUER TIRAR)
^^ Todos os métodos a cima modificam o Array^^
- pegar somente alguns elementos do array: .slice(CASA ONDE QUER COMEÇAR, CASA ONDE QUER PARAR) 

- encontrar a posição de um elemento no array:
*/

let techs = ["nome", "idade", "peso"] 
techs.push("altura")
techs.unshift("sobrenome")
//techs.pop()
//techs.shift()
//techs.splice(2, 1)
console.log(techs)
//console.log(techs.slice(0, 2))

let index = techs.indexOf('peso')
techs.splice(index, 1) //para remover o elemento que foi procurado na linha a cima

console.log(index)
console.log(techs)



