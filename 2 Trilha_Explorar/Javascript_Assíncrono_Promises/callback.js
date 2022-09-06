//Funções aceitam qualquer tipo de dado

function imprimirDado(dado) {
    console.log(dado)
}

imprimirDado(1)     //number
imprimirDado('String')      //string
imprimirDado(true)          //boolean
imprimirDado({Nome: 'Ananda'})      //object
imprimirDado([1, 2, 3])             //array


//Função Callback: uma função que é passada como argumento para outra função, e depois é chamada de volta.
function funcaoRecebeFuncao(arg) {          /*arg é uma função que irá receber a função passada como argumento em funcaoRecebeFuncao*/
    console.log('executar tarefas')
    console.log(arg())                      /*a função arg é chamada*/
}

funcaoRecebeFuncao(function () {
    return 'Olá Mundo!'
})        //function
