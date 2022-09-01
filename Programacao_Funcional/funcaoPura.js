// função impura

//Exemplo 1: afunão está dependendo de dado externo, que não foi passado como um argumento (a API Math)
function culculateCircumference(radius) {
    return Math.PI * (radius + radius)     //se houver alguma alteração em Math.PI vai alterar o resultado da função    
}       //essa função se torna pura se Math for adicionada como um argumento junto com radius

//Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael',
    age: 'jovem'
}

function changeName(name) {     //person está fora da função.
    person.name = name
}


//função pura

//Exemplo 1:
const culculateCircumference = function(pi, radius) {
    return pi * (radius + radius)           //todos as variáveis entraram como argumentos
} 

//com arrow function
const calcularCircunferencia = (pi, radius) =>
    pi * (radius + radius)  
    
//Exemplo 2:
const changePersonName = (person, name) =>
    ({...person, name})      //retorna um novo objeto pessoa, herdando todas os dados do objeto person e alterando o nome.

