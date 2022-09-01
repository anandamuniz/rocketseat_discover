const sayMyName = () => console.log('Mayk')
const runFunction = fn => fn()      //essa variável foi construida pararoda a função, então ela recebe a função fn como argumento e executa fn()

runFunction(sayMyName)      //isso significa que: runFunction = sayMyName = sayMyName() 
runFunction(() => console.log('discover'))      //uma função é passada como argumento

console.log(runFunction(Math.random))