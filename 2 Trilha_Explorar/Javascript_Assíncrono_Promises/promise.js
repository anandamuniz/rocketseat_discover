//PROMISE


//promessa bem sucedida
console.log('pedir uber!')

const PromessaSucesso = new Promise( (resolve, reject) => {
    return resolve('carro chegou!!')        //indica que irá concluir a promessa com sucesso | return rejet() indica que a promessa foi rejeitada
} )

console.log('aguardando...')

PromessaSucesso.then(result => console.log(result))


//promessa mal sucedida

//console.log('pedir outro uber!')

const PromessaRejeitada = new Promise( (resolve, reject) => {
    return reject('pedido negado.')        //indica que irá concluir a promessa com sucesso | return rejet() indica que a promessa foi rejeitada
} )         

//console.log('aguardando...')

PromessaRejeitada.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('finalizada!'))

//Como a fução Promise é uma callback, primeiro irá imprimir toda a aplicação e depois essa função será chamada
//finally serve para finalizar a promessa

//////////Fazendo uma única função
let aceitar = false
console.log('pedir comida.')

const promessa = new Promise((resolvido, rejeitado) => {
    if(aceitar) {
        return resolvido('Seu pedido foi levado para cozinha.')
    }

    return rejeitado('Acabou o pão. Seu pedido foi negado.')
})

console.log('aguardando resposta...')

promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('operação finalizada!'))
