
// Duas barras para fazer comentários
// Comendo ALT+Z para quebrar uma linha
/* Para azer contários em várias linhas */

/* STRING
é uma cadeira de caracteres*/

// Quando usar "" ? Quando dentro das aspas precisar usar aspa simples
console.log("A'nanda'")

// Quando usar ''? Quando dentro das aspas precisar usar aspa dupla
console.log('A"nanda"')

/* Quando usar `` (crase) ? Quando dentro das aspas precisar usar aspa dupla e simples, para fazer multilinhas, e quando precisar colocar expressões de linguagem (`${1+1}`)
`` é chamada de template literals ou template strings*/
console.log(`"A'nanda"`)
console.log(`Ananda ${2+2}`)

/* NUMBER
números
inteiros, reais (ou float), NaN para string que não é número e Infinity para infinito.*/
console.log(12) 
console.log(2.5+8)

/* BOOLEAN
somente dois valores: TRUE ou FALSE*/
console.log(true)
console.log(false)

/* UNDEFINED e NULL
--> Undefined significa indefinido, algo que não existe

--> Null significa nulo, o objeto (algo) que não possui nada dentro*/

/* OBJECT
objeto, possui propriedades (atributos) e funcionalidades (métodos).
método é um comportamento de objeto
--> Como escrever objetos: {propriedade: "valor"}*/
console.log({
    name: "Ananda",
    idade: 28,
    andar: function() {
        console.log('andar')
    }
})

/* ARRAY 
ou vetores
é uma lista, um agrupamento de dados ["Ananda", 28]*/
console.log([
    "Ananda", 28, "Muniz"
])

/* VARIÁVEIS
Nomes simbólicos para receber algum valor, atalhos de código, identificadores
Palavras reservadas para criar uma variável: var, let, const
Letras maiúsculas, minúsculas e acentuação fazem diferença (árvore é diferente de arvore e de Árvore )
--> Para declarar variáveis: var name (onde name é a variável)
--> Para declarar e atribuir valores: var name = "Ananda"
--> Para saber o tipo de variável: console.log(typeof nome_da_variavel)*/

// Do tipo var
var clima = "Quente"
console.log(clima)
//  Para variar a variável
var clima = "Quente"
clima = "Frio"
console.log(clima)

//Do tipo let
let clima = "Quente"
console.log(clima)

// Do tipo const (a variável não varia)
const clima = "Quente"
console.log(clima)

/* ESCOPO
Determina a visibilidade de alguma variável no JS */

// --> BLOCK STATEMENT
// var é global e local

console.log('> existe x antes do bloco', x)

{
    var x = 0
}

console.log('> existe x depois do bloco', x)

// escopo local é apenas o que ta dentro das {}
// escopo global é tudo
// hoisting elevação da var global

// const e let são locais e só funcionam no escopo onde foram criadas

{
    let y = 0
    console.log('> existe y', y)
}

{
    const z = 2 
    console.log('> existe z', z)
}

/* CONCATENAR VARIÁVEIS
Como escrever texto + variáveis */
{
    let name, age 
    name = "Ananda"
    age = 28

    console.log('A ' + name + ' tem ' + age + ' anos.')

}

/* INTERPOLAR VARIÁVEIS
Outra maneira de escrever um texto com variáveis
Dentro da crase usa ${}*/

{
    let name, age 
    name = "Ananda"
    age = 28

    console.log(`A ${name} tem ${age} anos.`)
}

/* OBJECT
name, age, weight e isAdmin são propriedades
e 'Anderson', 33, 70, true são valores

--> Para imprimir apenas uma propriedade basta usar o nome_do_objeto.propriedade*/

{
    const person = {
        name: 'Anderson',
        age: 33,
        weight: 70,
        isAdmin: true
    }

    console.log(person.age)
    console.log(`${person.name} é homem.`)
}

/* ARRAY 
Como acessar valores dentro do Arrey
nome_da_lista[posição do elemento]
Lembrar que a lista começa da posição zero.*/

{
    const animals = [
        'Lion',
        'Monkey',
        'Cat',
        'Dog'
    ]
    console.log(animals[2])
}

