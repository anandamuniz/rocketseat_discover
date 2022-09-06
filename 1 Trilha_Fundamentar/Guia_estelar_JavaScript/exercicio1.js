//EXERCÍCIO

//1. Declare uma variável de nome weight.
let weight 

//2. Que tipo de dado é a variável acima? é uma variável do tipo undefined, pois foi declarada e não foi atribuido valor
console.log(typeof weight)

/*33. Declare uma variável e atribua valores para cada um dos dados:
    name: String
    age: Number (integer)
    stars: Nunber (float)
    isSbscribed: Boolean
*/

let pessoa = {
    name: "Mona",
    age: 1,
    stars: 4.2,
    isSubscribed: false
}

let nome, idade, peso, humano

nome = "Mona"
idade = 1
peso = 4.2
humano = false

//4. A variável student abaixo é de que tipo de dados?
let estudante = {};
//essa variável é do tipo objeto
console.log(typeof estudante)

//4.1 Atribua a ela as mesmas propriedade e valores do exercício 3.

let student = {
    nome: "Luiz",
    idade: 23,
    peso: 68.5,
    isSubscribe: true
}

console.log(`O ${student.nome} de idade ${student.idade} pesa ${student.peso} kg.`)

//5. Declare uma variável do tipo Array, de nome estudantes e atribua a ela nenhum valor, ou seja, somente o Array vazio.

let estudantes = [

]

console.log(typeof estudantes)

//6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
estudantes = [
    student
]
console.log(estudantes)

//7. Coloque no Console o valor da posição zero do Array acima
console.log(estudantes[0])

//8. Crie um novo student e coloque na posição 1 do Array estudantes
const rebeca = {
    nome: "Rebeca",
    idade: 6,
    weight: 40.5,
}

estudantes = [
    student,
    rebeca
]

console.log(estudantes)
//estudantes[1] = rebeca    outra forma de adicionar o objeto no array

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se vc acertou.


console.log(a)
var a = 1


//vai imprimir undefined, pois var é global e local então eleva apenas var a, logo a variável é apenas declada e não atribuida um valor antes do console

