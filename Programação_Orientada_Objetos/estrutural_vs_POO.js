//ESTRUTURAL

let altura = 50
let largura = 60

function calcularArea() {
    return altura*largura
}

let area = calcularArea

////////////////////////////////////////////////////
//ORIENTADO A OBJETOS

class Poligono {
    constructor(altura, largura) {
        this.altura = altura;       //this.altura: este objeto Poligono que será criado recebe altura 
        this.largura = largura;     //this.largura: este objeto Poligono que será criado recebe largura 
    }
//this faz referência ao objeto do qual a função é uma propriedade.

    get area() {                    //get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }

    //A # significa que o método e a função não serão visíveis fora da classe

}

//criar o objeto
let poligono = new Poligono(50, 60)     //aqui é criado um novo objeto através da classe Polígono
console.log(poligono)                   //IMPRIME: Poligono { altura: 50, largura: 60 }
console.log(poligono.area)              //IMPRIME: 3000
//console.log(poligono.#calcularArea())         //IMPRIME: error, pois #calcularArea() só tem acesso liberado dentro da classe

////////////////////////////////////////////////////
//estruturado
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

//POO
const job = new Job()       //novo objeto criado
job.valorHora = 50          //valorHora é uma propriedade do objeto job
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()          //linha onde irá acontecer os cálculos
console.log(custoEstimado)

