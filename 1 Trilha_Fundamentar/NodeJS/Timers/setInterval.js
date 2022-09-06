// setInterval irá rodar uma função N vezes depois de X milissegundos

const timeOut = 1000        //será o intervalo com que a função roda, ou seja, a cada segundo a função é chamada
const checking = () => console.log('checking!')

setInterval(checking, timeOut)