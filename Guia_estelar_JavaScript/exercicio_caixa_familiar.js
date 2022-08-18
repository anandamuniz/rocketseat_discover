/* Fluxo de caixa familiar

Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

DESAFIO:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let saldo = {
    receitas: [1000, 2500, 500],
    despesas: [50, 80, 65, 99, 550]
}

let total_receitas = 0;
for ( let i = 0; i < (saldo.receitas).length; i++ ){
   total_receitas += saldo.receitas[i];
}
console.log(total_receitas)

let total_despesas = 0;
for ( let i = 0; i < (saldo.despesas).length; i++ ){
    total_despesas += saldo.despesas[i];
 }
console.log(total_despesas)

let valor_saldo = function(total_receitas, total_despesas) {
    let final = total_receitas - total_despesas
    return final
}

if (valor_saldo(total_receitas, total_despesas) > 0) {
    console.log(`A família está com saldo positivo igual a ${valor_saldo(total_receitas, total_despesas)}`)
} else {
    console.log(`A família está com saldo negativo igual a ${valor_saldo(total_receitas, total_despesas)}`)
}

///////////////////////////////////////////////////////////////////////////////////////////////
//JEITO ENSINADO NO VÍDEO
let family = {
    incomes: [2000, 1000, 1250.5],
    expenses: [256.9, 320.45, 1450, 69.99]
}

function som(array_) {
    let total = 0;

    for (let value of array_) {
        total += value
    }

    return total
}

function calculeteBalance () {
    const calculateIncomes = som(family.incomes)
    const calculateExpenses = som(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculeteBalance()


 

