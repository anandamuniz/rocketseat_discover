//o módulo de eventos já faz parte do NodeJS

const events = require('events')        //para importar o módulo
console.log(events)

const { EventEmitter } = require('events')         //essa forma de declarar uma variável é chamada de destructuring assignment, na prática é um atalho para declarar variáveis com o mesmo nome do que uma propriedade de um objeto, ou em arrays declarar indexando à posição de uma array.
console.log(EventEmitter)

const ev = new EventEmitter()           //EventEmitter() é uma classe na estrutura de função | ev é um objeto
//console.log(ev)

ev.on('saySomething', (message) => {           //comando on: escuta o evento | ao escutar o evento executa uma ação que é a função
    console.log('Eu ouvi você: ', message)
})           

ev.emit('saySomething', 'Ananda')         //comando para emitir um evento
ev.emit('saySomething', 'Mona')             //sempre que o evento for emitido a função registrada em ev.on sera chamada

ev.once('saySomething', (message) => {           //comando on: escuta o evento | ao escutar o evento executa uma ação que é a função
    console.log('Eu ouvi você: ', message)
}) 

ev.emit('saySomething', 'Mona') 
ev.emit('saySomething', 'Ananda')       //só imprime um eveto emitido, logo só imprime "Mona"


/////////////////////////////////////////
//Herdando do EventEmitter

const { inherits } = require('util')        //essa variável "puxa" do módulo util a função inherits
//const { EventEmitter } = require('events')  //a função inherits vai herdar as funcionalidades do Event Emitter para a função Character

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)       //inherits é uma função que recebe como primeiro argumento a função Character, que é uma função construtora, e dentro dessa função terá opções do evento Emitter

const chapolin = new Character('Chapolin')          //a variável chapolin herdou os comandos emit, on, once

chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado.`))      //lê-se: chapolin quando escutar um 'help' sua ação será imprimir o que está no console.log

console.log('Oh! E agora quem poderá me defender?')
chapolin.emit('help')      //a linha 41 só é lida depois da linha 44 que é a emissão do evento


