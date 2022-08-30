const timeOut = 3000    //após 3000 milisegundos a função irá rodar
const finished = () => console.log('done!')

setTimeout(finished, timeOut) //a função fineshed é passada como uma referencia da função, não precisa executá-la + o tempo para rodar.

console.log('essa mensagem é mostrada antes do done, pois não tem tempo de espera')

//finished é uma função callback, ou seja, é uma função que será chamada de volta depois de 3 segundos

