//     * O segundo arquivo irá importar a função e passar a flag desejada;
//     * Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting;
//     * Para que seja impresso no terminal a saudação e nome da pessoa.
const importFunction = require('./arquivo1.js')

console.log(`Oi ${importFunction("")}. ${importFunction('')}`)