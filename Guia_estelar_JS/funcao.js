

/* Para que servem as funções em JS?
1. Para explicar o que um pedaço do código está fazendo
2. Para repetir um código todas as vezes que necessário 
*/



//declaração da função
function createPhrases () {
    console.log('Preciso estudar!')
    console.log('Programação.')
}

//executar(rodar, chamar, invocar) a função
createPhrases()

//Function expression ou função anonima 
/* const sum = function() {

}
*/

// PARÂMETROS 1
/* const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2, 3) //argumentos */

// PARÂMETROS 2

let total = 0

const sum = function(number1, number2){
    let total = number1 + number2
    return total //para imprimir no console.log(`a soma é...`) / a função sempre que acha a palavra return para a execução e imprime o que vem em seguida a essa palavra
}

let number1 = 2
let number2 = 5

console.log(`o número 2 é ${number2}`)
console.log(`o número 1 é ${number1}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total) //pega o total fora do scopo de função

// FUNCTION HOISTING

sayMyName ()

function sayMyName () {
    console.log('Ananda')
}

/*não funciona pois não ocorre elevação
sayMyName ()

const sayMyName = function() {
    console.log('Ananda')
}
*/

/* ARROW FUNCTION
Uso da seta para representar função*/
const say = () => {
    console.log('ashuhasu')
}

say()

/* FUNCTION CALLBACK
é uma função que 'chama' uma outra função escrita anteriormente
a função tem que ser parâmetro de outra função
*/

function teste(funcao_callback){
    funcao_callback()
}
teste(say)


/* FUNCTION CONSTRUCTOR
 Ao adicionar a palavra NEW antes da funçao, esta retorna um novo objeto
 Ao usar a palavra THIS dentro do escopo da função esta vai estar referenciada à variável externa ao escorpo
*/

/*function Person() {}
const mona = new Person() //função construtora
console.log(mona)
*/

function Person(name) {
    this.name = name 
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mona = new Person('Moninha') //a variável mona agora tem uma propriedade chamada NAME

console.log(mona.walk())

