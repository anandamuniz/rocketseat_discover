// Expressões e Operadores

//EXPRESSÕES
let number
//ou
let number_ = 3; //pode ou não terminar com ;

//OPERADORES
console.log(number_ + 1) //operador binário
console.log(++number_) //operador unário
console.log(--number_) //operador unário
console.log(false ? 'ananda' : 'anderson')  //operador ternário

/*EXPRESSÃO NEW
cria um novo objeto*/

let name = new String('Ananda')
name.surName = "Oliveira"
let age = new Number(28)
console.log(name, age)


/* OPERADOR UNITÁRIO
typeof : tipo de objeto, se é string, number, etc.
delete : deleta alguma propriedade ddo objeto
*/

let nome = 'Ananda O Muniz'
console.log(typeof nome)

const person = {
    name: 'Ananda',
    age: 28,
}
delete person.name  //deletou a propriedade name do objeto
console.log(person)
console.log(typeof person)

/* OPERADORES ARITIMÉTICOS
*/

//resto da divisão: %
let remainder
remainder = 11 % 9
console.log(remainder)

//incremento: ++ , é somar com 1 
let increment = 0
console.log(increment++) // imprime 0 pois o incremento só vale depois que passar dessa linha
console.log(++increment) // imprime 2, pois o 0 soma 1 após a linha de cima e cima 1 nessa linha, mas sem a linha de cima imprime 1

//decremento: --, é subtrair com 1
let decremento = 2
decremento--
console.log(decremento)

//exponencial: **
console.log(2 ** 2)

/* GROUPING OPERATOR ()
Agrupamento de operadores, usa-se parênteses para agrupar cálculos
*/

let total = 2 + 3 * 5
console.log(total)
let total_ = (2 + 3) * 5
console.log(total_)

/* OPERADORES DE COMPARAÇÃO
irá comparar valores e retornar um boolean como resposta à comparação
*/

let one = 1
let two = 2

// == igual a 
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

/* OPERADORES DE COMPARAÇÃO ESTRITAMENTE IGUAL E ESTRITAMENTE DIFERENTE
*/

//estritamente igual a ===
console.log(one === "1") //é igual no valor mas é diferente no tipo
console.log(one === 1)

//estritamente diferente !==
console.log(two !== "2") // != compara o valor e = compara o tipo
console.log(two !== 2)

/* OPERADORES DE COMPARAÇÃO MAIOR QUE, MENOR QUE
*/

//Maior que >
console.log(one > two)

//Menor que <
console.log(one < two)

//Maior igual que >=
console.log(one >= two)
console.log(one >= 1)

//Menor que <=
console.log(one <= two)
console.log(two <= 2)
console.log(two <= 5)

/* OPERADORES DE ATRIBUIÇÃO (ASSIGNMENT)
*/

let x


//assignment: uma atribuição simples é feita com o sinal de igual (=) em que a variável recebe uma atribuição
x = 1

// addition assignment
x += 2 // é a mesma coisa de x = x + 2

// subtraction assignment
x -= 1 // mesma coisa de x = x - 1

// multiplication assignment
x *= 3 // mesma coisa de x = x * 3

// division assignment
x /= 3 // mesma coisa de x = x / 2

// exponetiation
x **= 2

// remainder
x %= 2
console.log(x)

/* OPERADORES LÓGICOS
são valores booleaos, quando verificados, resultará em verdadeiro ou falso*/

let pao = true
let queijo = false

// AND (E): &&
console.log(pao && queijo) // para imprimir TRUE é necessário que as duas variáveis seja TRUE

// OR (OU): ||
console.log(pao || queijo) // para imprimir TRUE é necessário que apenas uma das variáveis seja TRUE

// NOT (NÃO): ! , negação, transforma o que é TRUE em FALSE
console.log(!pao)

/* OPERADOR CONDICIONAL (TERNÁRIO)
é escrito da forma: condição então valor 1 se não valor 2, esse valor pode ser uma string, um number, um array, entre outros
condition ? valor1 : valor2*/

const cafeDaManha = pao && queijo ? 'Bom café da manhã' : 'Café ruim'
console.log(cafeDaManha)

const cafezinho = pao || queijo ? 'Bom café da manhã' : 'Café ruim'
console.log(cafezinho)

//Exemplo 2: maior de 18 anos
let idade = 17
const podeDirigir = idade >= 18 ? 'pode dirigir' : 'não pode dirigir'
console.log(podeDirigir)

/* OPERADOR STRING
*/

// comparação ==
console.log( 'a' == 'a')

// concatenação + , retorna a união de duas strings
console.log( 'a' + 'a')
let alpha = 'alpha'
console.log(alpha + 'bet')


/* FALSY 
quando um valor é considerado false em contexto onde um booleao é obirgatório (condicionais e loops)
---> Valores que imprimem falso:
false
0
-0
""
null
underfined
NaN
*/

console.log(false ? 'verdadeiro' : 'falso') //vai imprimir falso

/* TRUTHY
quando um valor é considerado true em contexto onde um booleao é obirgatório (condicionais e loops)
---> Valores que imprimem true:
true
{}
[]
1
3.23   //pode ser qualquer número
"0"    
"false"   // string com alguma coisa dentro
-1
Infinity
-Infinity
*/

console.log("alala" ? 'verdadeiro' : 'falso') //vai imprimir verdadeiro

/* PRECEDÊNCIA DE OPERADORES
é a mesma da matemática
relacional                < <= > >=
igualdade                 == != === !==
and                       &&
or                        ||
condicional               ? :
atribuições               = += -= *=
*/

console.log( 3 > 2 > 1)  //imprime false, pois o JS entende que 3 > 2 é TRUE e TRUE > 1 é false
console.log( 3 > 2 && 2 > 1) //imprime true


