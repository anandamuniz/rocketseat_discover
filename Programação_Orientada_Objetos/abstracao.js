//definir uma classe abstrata
class Parafuso {
    constructor() {
        if (this.construtor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada.')
    }
    
    get tipo() {        //será implamentado nas classes que herdarem da classe Parafuso
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

//filho 1
class Fenda extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'fenda'
    }
}

//filho 2
class Philips extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'philips'
    }
}

//filho 3
class Allen extends Parafuso {}

//criar e usar
new Parafuso()                  //só existe parafuso se ele for de algum tipo específico (fenda, philips ou allen)
let fenda = new Fenda()
let philips = new Philips()
console.log(fenda.tipo, philips.tipo)

let allen = new Allen()
console.log(allen.tipo)     //IMPRIME: throw new Error('Método "get tipo()" precisa ser implementado')
