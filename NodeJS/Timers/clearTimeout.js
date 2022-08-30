//o clearTimeout é usado para cancelar algum timeOut

const timeOut = 3000    //após 3000 milisegundos a função irá rodar
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut) //a função fineshed é passada como uma referencia da função, não precisa executá-la + o tempo para rodar.
clearTimeout(timer)     //cancela o Timeout, ou seja, a função aqui é cancelada e não imprime nada

