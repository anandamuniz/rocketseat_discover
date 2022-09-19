const https = require('https')           //dentro do node já existe um pacote https
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'       //a constante API recebe uma string que é um link, assim a constante irá pegar informações desse link

https.get(API, res => {
    console.log(res.statusCode)
})      //o objeto htpps recebe uma funcionalidade .get() em que o primeiro argumento é uma constante e o segundo uma função do tipo arrow function
        // res => {} é uma callback, pois como irá imprimir o status da operação, essa tem que acontecer para depois a função ser chamada

console.log('conectando API')

