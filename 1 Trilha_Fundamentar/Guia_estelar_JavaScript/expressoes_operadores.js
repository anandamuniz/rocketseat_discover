/////EXPRESSÕES

let numbers;             //é uma expressão que pode ou não terminar com ;

///OPERADORES
let numero1 = 1

console.log(numero1 + 1)         //operador binário (soma de dois valores)
console.log(++numero1)           //operador unário (soma de um valor com ele mesmo, chamado de INCREMENTO)
console.log(--numero1)           //operador unário (subtração de um valor por ele mesmo, chamado de DECREMENTO) 
console.log(true ? 'alo' : 'nada')      //operador ternário (true então alo senão nada)

////NEW
let name_ = new String("Ananda")        //new cria um novo objeto usando as fuções construtoras
let age_ = new Number(29)
let date_ = new Date("2022-08-16")
console.log(name_, age_, date_)

////DELETE
const persona = {
    name: "Ananda",
    age: 29,
}
delete persona.age          //deleta a propriedade age
console.log(persona)

////Operadores aritméticos

//multiplicação
console.log(3 * 8)

//divisão
console.log(12 / 2)

//soma
console.log(52 + 2)

//subtração
console.log(56 - 9)

//resto da divisão
let remainder
remainder = 11 % 9
console.log(remainder)

//incremento ++
let increment = 0
increment++            //soma 1 a variável 
console.log(increment)      //se escrever do console.log(++increment) imprime 1, pois incrementa antes de chhegar na variável | se escrever console.log(increment++) imprime 0 pois chega na variável antes de incrementar

//decremento --
let decrement = 0
decrement--            //soma 1 a variável 
console.log(decrement)

//exponencial **
console.log(3 ** 2)

////Operadores de comparação igual a e diferente de

let one = 1
let two = 2

// igual a ==
console.log(two == 1)       //false
console.log(one == "1")     //true

// diferente de !=
console.log(one != two)     //true
console.log(one != 1)       //false
console.log(one != "1")     //false

////Operadores de comparação estritamente igual e estritamente diferente

//estritamente igual    ===
console.log(one === "1")    //false, pois é igual no valor e diferente no tipo
console.log(one === 1)      //true

//estritamente diferente !==
console.log(two !== "2")    //true
console.log(two !== 2)      //false

////Operadores de comparação maior e menor (igual)

//Maior que >
console.log(one > two)      //false

//Maior igual a >=
console.log(one >= 1)       //true
console.log(two >= 1)       //true

//Menor que <
console.log(one < two)      //true

//Menor igual a <=
console.log(one <= two)     //true
console.log(one <= 1)       //true
console.log(one <= 0)       //false

////Operadores de atribuição (assignment)
let pi

//assignment
pi = 1

//addition assignment
pi += 2          //pi = pi + 2
console.log(pi)

// subtraction assignment (subtração):
pi -= 1         //pi = pi - 1

// multiplication assignment (multiplacação):
pi *= 2             //pi = pi * 2

// division assignment (divisão):
pi /= 2             //pi = pi /= 2

// exponetiation assignment (exponenciação):
pi **= 2            //pi = pi ** 2

// remainder assignment (resto de divisão):
pi %= 2         //pi = pi %= 2


////Operadores lógicos
let pao = true
let queijo = false

//AND && (true quando os dois valores são true)
console.log(pao && queijo)      //false

//OR || (true quando um ou os dois valores são true)
console.log(pao || queijo)         //true

//NOT !     (troca o valor, o que é verdadeiro vira falso e virce versa)
console.log(!pao)


////Operador condicional ternário
let cafe = true
let leite = false

const cafe_da_manha = cafe && leite ? 'Café top' : 'Café ruim'      //cafe && leite: true && false = false, (se for true) então 'Café top' (se for false) senão 'Café ruim'
const cafe_com_leite = cafe || leite ? 'Café top' : 'Café ruim'     //cafe || leite: true || false = true

console.log(cafe_da_manha)
console.log(cafe_com_leite)

//exemplo: saber se uma pessoa é maior de 18 anos
let idades = 16
const pode_dirigir = idades >= 18 ? "pode dirigir" : "não pode dirigir"     //lê-se: se idades maior igual a 18 então "pode dirigir" senão "não pode dirigir" 
console.log(pode_dirigir)


////Operadores para string

let alpha = 'alpha'
console.log(alpha + 'bet')

////Falsy e truthy

//FALSY: false, 0, -0, "", null, undefined, NaN 
console.log( NaN ? 'verdadeiro' : 'falso' )     //o JS entende que NaN tem valor falso

//TRUTHY: true, {}, [], 1, 3.23, "string com algo escrito", "false", -1, Infinity, -Infinity
console.log( "bla" ? 'verdadeiro' : 'false')

////Precedência dos operadores
/*
De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/


////IF...ELSE
/*
if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}
*/

//exemplo
let temperatura = 36.6

if (temperatura >= 37) {
    console.log('Febre')
} else {
    console.log('Saudável')
}

////IF...ELSE IF...
if (temperatura >= 37.5) {
    console.log('Febre alta')
} else if (temperatura < 37.5 && temperatura > 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

//outra forma de escrever
let alta_temperatura = temperatura >= 37.5
let media_temperatura = temperatura < 37.5 && temperatura > 37

if (alta_temperatura) {
    console.log('Febre alta')
} else if (media_temperatura) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


/////SWITCH
/*Estrutura:
swtch (expression) {
    case 'a':       // confere se o valor da expressão é o correto
        //código
        break       // para a execução do switch apenas se verdadeiro
    case 'b':
        //código para expression b
        break
    default:        // caso nenhum valor seja o correto
        break
}
*/

function calculate(number1, operator, number2) {
    let result 

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))


/////Throw (lançar) e Try (tentar)/Catch(pegar)
//throw
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'          //cria um objeto do tipo erro, pode ser escrito como: new Error ('mensagem')
    }           //o thhrow para a execução da função
    console.log(name)
 //   console.log('depois do erro')
}

//try...catch
/*try {
    sayMyName()         //tenta rodar a função
} catch(parametro) {
    console.log(parametro)          //captura o erro gerado pelo throw
}*/

console.log('após a função de erro')        //continua a rodar a aplicação

try {
    sayMyName('Ananda')         //tenta rodar a função, como roda da forma correta imprime Ananda
} catch(parametro) {
    console.log(parametro)          //captura o erro gerado pelo throw
}