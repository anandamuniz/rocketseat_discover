//clearInterval serve para cancelar um setInterval registrado

const timeOut = 1000        //será o intervalo com que a função roda, ou seja, a cada segundo a função é chamada
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 3000)        //após 3s a função roda

//irá imprimir apenas 2 vezes o chhecking pois no primeiro segundo começa a contar simultaneamente as funções