//FAÇA: Função que eleva o número ao quadrado

//programação imperativa: diz como fazer (esse tipo é stateful function: a função depende de valores externos que variam seu próprio valor)
let number = 2      //crie uma variável que recebe o número 2

function square() {             //crie uma função que retorna a operação
    return number * number
}

number = square()           //a variável vai receber o resultado da função

//programação declarativa: diz o que fazer e não como fazer. (esse tipo é stateless function: só conhece os dados que são entregues a ela)
const square = n => n * n



