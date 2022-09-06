//////////////////////SELECIONANDO ELEMENTOS///////////////////////////////////////

//getElementById()
const element = document.getElementById('blog-title')
console.log(element)

//getElementsByClassName()
const elements = document.getElementsByClassName('one')
console.log(elements)

//getElementsByTagName()
const elemento = document.getElementsByTagName('meta')
console.log(elemento)

//querySelector
const seletor = document.querySelector('.one')
console.log(seletor)

//querySelectorAll
const seletorTotal = document.querySelectorAll('.one')
console.log(seletorTotal)

//////////////////////MANIPULANDO CONTEÚDOS///////////////////////////////////////
const conteudo = document.querySelector('h1')

//textContent
conteudo.textContent = 'Alô Dev!'       //troca o texto do h1
console.log(conteudo.textContent)       //imprime esse novo texto (Alô Dev!)
conteudo.textContent += 'Alô Dev!'      //soma esse texto ao texto do h1

//innerText
conteudo.innerText = "oi você."     //troca o conteúdo de h1 por esse conteúdo, imprime apenas texto

//innerHTML
conteudo.innerHTML = "Olá Devs! <small>!!!</small>" //tag <smal> do html é adicionada alterando o texto, vai imprimir o que está como texto entre as tags 

//Value
const entrada = document.querySelector('input')
entrada.value = "Valor que eu quiser"           //altera o valor do input
console.log(entrada.value)          //é possível pegar o valor atribuido ao console, esse valor pode ser atribuido no HTML

//Manipulando atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header');     //.setAttribute(atributo, valor escolhido para esse atributo), nesse caso adicionou ao header um atributo ID de nome header

const headerID = document.querySelector('#header')
console.log(headerID)
console.log(headerID.getAttribute('id'))    //pega o valor do atributo ID

header.removeAttribute('id')        //remove o atributo


//////////////////////Manipulando estilos e classes////////////////////////////////

//Alterando estilos com style
const estilo = document.querySelector('body')
estilo.style.backgroundColor = "#F9F3D2"
console.log(estilo.style.backgroundColor)       //imprime a cor em rgb: rgb(249, 243, 210)

//classList
estilo.classList.add('active', 'green')      //adiciona a classe active e green (definidas no HTML) no body
console.log(estilo.classList)
estilo.classList.remove('active')       //remove o estilo active
estilo.classList.toggle('active')       //se tivier a classe ele retira, se não tiver ele adiciona

//////////////////////Navegando pelos elementos pais////////////////////////////////

//parentElement e parentNode
const body = document.querySelector('body')
console.log(body.parentNode)
console.log(body.parentElement)
console.log(body.childNodes)        //imprime no formato de NodeList
console.log(body.children)
console.log(body.firstChild)        //imprime o primeiro elemento(considera os espaços (parágrafos) entre elementos)
console.log(body.firstElementChild)     //imprime o primeiro eleemento independente de ter espaços (parágrafos) entre eles
console.log(body.lastChild)
console.log(body.lastElementChild)

//////////////////////buscando irmãos//////////////////////
const filhos = document.querySelector('input')
console.log(filhos.nextSibling)         //pega o primeiro irmão do header, considera os espaços em branco
console.log(filhos.nextElementSibling)
console.log(filhos.previousSibling)
console.log(filhos.previousElementSibling)


//////////////////////Criando e adicionando elementos na página//////////////////////

//Criando e adicionando elementos
const div = document.createElement('div');      //para criar um elemento
div.innerText = 'Olá mundo.'

const adicionar = document.querySelector('body')
body.append(div)            //para adicionar o elemnto criado
body.prepend(div)


//inserBefore
/*
const div = document.createElement('div');      //para criar um elemento
div.innerText = 'Olá mundo.'
const adicionar = document.querySelector('body')
*/
const script = document.querySelector('body script');           //ou const scropt = body.querySelector('script') para pegar o elemento dentro do body
adicionar.insertBefore(div, script)             //nomeDaVariável.insertBefore(nome do elemento que será adicionado, antes de qual elemento será adiconado)  

//adicionar.insertBefore(div, header.nextElementSibling)      //para adicionar um elemento após outro.

//////////////////////EVENTOS//////////////////////

//Adicionando eventos via HTML
function print() {
    console.log('print')
}

//Eventos de teclado
//const entrada = document.querySelector('input')

entrada.onkeyup = function() {        //método ativado ao clicar numa tecla do teclado
    console.log('rodei')
}

//Adicionando eventos via JS
const h2 = document.querySelector('h2')

h2.addEventListener('click', print)         /*essa função significa adicionar um ouvidor de eventos, recebe dois argumentos o primeiro é o tipo de envento e o segundo é a função que será executada após o primeiro evento*/

function print() {
    console.log('print')            /*quando acontece o click imprime no console a palavra print*/
}

//Adicionando eventos via JS (Outro método)
const h2_outroJeito = document.querySelector('h2')

h2_outroJeito.onclick = print         /*onclick igual ao nome da função criada abaixo, colocar só o nome é um atalho para chamar a função*/

function print() {
    console.log('print')            /*quando acontece o click imprime no console a palavra print*/
}

h2_outroJeito.onclick = function() {
    console.log('outro momento')
}                                   /*usando o onclick irá imprimir sempre o último encontrado*/


//Argumento event
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget)
}