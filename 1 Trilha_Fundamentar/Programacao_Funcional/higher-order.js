//Exemplo 1: usando .map()
const number = [2, 4, 8, 16]       //array
const square = n => n * n          //função

const squaredNumber = number.map(square)    //a função square é passada como um argumento
//IMPRIME: [4, 16, 64, 256]

//Exemplo 2: retornar uma função (currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)    //a constante pause recebe a função wait, o retorno dessa função é uma outra função fn => setTimeout(fn, wait)

pause(600) ( () => console.log('waiting 600ms') )   //pause(600): pause é a função, e wait recebeu o valor de 600

const wait200 = pause(200)      //a função é registrada numa variável para ser usada depois
const wait1000 = pause(1000)

wait200( () => console.log('waiting 200ms'))
wait1000( () => console.log('waiting 1s'))