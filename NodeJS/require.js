const path = require ('path')       //require () é uma maneira de chamar módulos nativos do JS |path é um módulo já existente

console.log(path)           //mostra as funções presentes nesse módulo

//Para chamar um módulo criado por mim:
const myModule = require('./exports.js')

console.log(myModule)