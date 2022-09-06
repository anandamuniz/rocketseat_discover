////Type conversion - manual

console.log(Number('9') + 5)        //manualmente estou convertendo uma string num número

////Type coersion

console.log('9' + 5)            //imprime: 95, houve uma concatenação dos valores

///// Tranformar string em número e número em string
let string = '123'
console.log(Number(string))         //imprime o número 123      |método estático

let number = 123
console.log(String(number))         //imprime a string "123"

////Contando caracteres e digitos
let word = "Paralelo"
console.log(word.length)

let numero = 1234
console.log(String(numero).length)          //length só funciona em string

////Casas decimais
let n1 = 223.9483920
console.log(n1.toFixed(2).replace(".", ","))            //imprime duas casas decimais e troca o ponto pela vírgura, agora com a vírgula o número vira uma string

////Maiúsculas e minúsculas
let letras = "Ananda Oliveira Muniz"
console.log(letras.toUpperCase())      //todas as letras em maiúsculo
console.log(letras.toLowerCase())       //todas as letras em minúsculo

////Encontrando palavras em frases
let phrase = "O dia está linda para pegar uma praia."
console.log(phrase.includes('praia'))           //imprime true

////Separando strings
let frase = "Várias queixas de você"
let myArray = frase.split(" ")          //cada palavra vira um elemento do array
console.log(myArray)
let frase_junta = myArray.join("")      //junta todas as palavras
console.log(frase_junta)
let frase_ = myArray.join("_")          //separa cada palavra com um _
console.log(frase_)

////Criando array com construtor
let novo_array = new Array("a", "b", "c")
console.log(novo_array)
let outro_array = new Array(10)
console.log(outro_array)        //cria um array vazio de tamanho 10

////Elementos do Array
console.log(["a", "b", {typeof:"array"}].length)
console.log(["a", "b", function() {return "olá"}][2])   //retorna o elemento 2
console.log(["a", "b", function() {return "olázinho"}][2]())        //como o elemento 2 é uma função é possível executar

////Strings para arrays
let palavra = "manipulação"
console.log(Array.from(palavra))        //cada letra vira um elemento do array

////Manipulando arrays
let techs = ["html", "css", "js"]

//adiciona um elemento no final
techs.push("nodejs")
//adiciona um elemento no começo
techs.unshift("sql")

console.log(techs)
//retira um elemento do final
let frutas = ["banana", "morango", "pera", "manga", "abacate"]
frutas.pop()

//retira um elemento do começo
frutas.shift()

console.log(frutas)

//pegar somenete alguns elementos do array
console.log(frutas.slice(1, 3))         //pega os elementos da posição 1 até a posição 3

//remover 1 ou mais items em qualquer posição do array
frutas.splice(1, 2)         //remover a partir da posição 1 2 elementos

console.log(frutas)

//encontrar a posição de um elemento
let vestuario = ["blusa", "calça", "short", "vestido", "top"]
let index = vestuario.indexOf("vestido")
console.log(index)
vestuario.splice(index, 1)          //remove o elemento buscado no index (o 1 é a quantidade de elementos a eliminar)

console.log(vestuario)

