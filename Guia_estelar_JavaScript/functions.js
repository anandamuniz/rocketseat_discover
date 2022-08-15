//declaração da função
function nome_da_funcao () {

}

//executar / rodar / chamar a função
nome_da_funcao()

//outra forma de declarar uma função
const nome_da_variavel = function() {}

////parâmetros: nessa fução number1 e number2 são os parâmetros
const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2, 3)       //2 e 3 são argumentos

////return
const soma = function(number1, number2) {
    let total = number1 + number2           //é importante definir como uma variável pois se posteriormente usar um console.log(total) irá imprimir o resultado da soma
    return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${soma(number1, number2)}`)   //esse console entra na variável soma e executa o total com os number1 e number2


////function scope
let subject         //cria-se uma variável

function criar_pensamento(subject) {    //cria-se uma função que vai receber um parâmetro com o mesmo nome da variável e retornar esse parâmetro 
    return subject
}

console.log(criar_pensamento(subject))  //irá imprimir a função e será undefined

//
let pensar = 'uma ideia'

function pensamento(pensar) {
    return pensar
}

console.log(pensar)             //imprime: uma ideia
console.log(pensamento(pensar)) //imprime: uma ideia

//
let ideia = 'uma ideia'

function criar_ideia(ideia) {       //como foi definido um parâmetro novo, mesmo com o mesmo nome, um é independente do outro, ideia aqui é diferente da variável ideia declarada na linhha 53 
    ideia = 'duas ideias'
    return ideia
}

console.log(ideia)                  //imprime: uma ideia         
console.log(criar_ideia(ideia))     //imprime: duas ideias

//
let ideiax = 'uma ideia'

function criar_ideiax() {       //como não foi definido nenhum parâmetro, a função irá procurar a variável fora do scopo
    ideiax = 'duas ideias'
    return ideiax
}

console.log(ideiax)                  //imprime: duas ideias         
console.log(criar_ideiax(ideiax))     //imprime: duas ideias

////Function Hoisting
say_my_name()

function say_my_name() {
    console.log('Ananda')
}                               //imprime Ananda, pois sofre elevação

/*
say_my_names()

const say_my_names = function() {
    console.log('Ananda')
}                               //dá erro e não imprime nada, pois variável não sofre elevação*/


//Arrow function
const diga_um_nome = () => {
    console.log('Mona')
}

diga_um_nome()

////Callback function
function diga_nome (name) {
    console.log(name)
}

diga_nome(
    () => {
        console.log('estou em uma callback.')
    }
)               //a função é passada como um parâmetro 


////Função construtora
function Person(nome) {
    this.nome = nome
}                   //"molde" para criar diversos objetos

const mona = new Person("Mona")             //cirando um objeto | usar new antes da função para retornar um objeto
const joanilda = new Person("Joanilda")     //objeto
console.log(mona)
console.log(joanilda)


