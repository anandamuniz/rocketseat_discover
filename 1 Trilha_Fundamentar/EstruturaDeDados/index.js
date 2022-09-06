////////ARRAY////////

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

//a indexação (index) começa pelo número 0
console.log(pilotos[0])     //Senna
console.log(pilotos[3])     //Hamilton

//acessar o tamanho do array
console.log(pilotos.length)   //4  

//interável
for (let piloto of pilotos) {
    console.log(piloto)
}

//adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

//deletar um elemento
pilotos.splice(1, 1)        //retira o elemento da posição 1
console.log(pilotos)

////////MATRIZ////////
const students = [['Joseph', 23, 'MG'], ['Briana', 22, 'SP'], ['Priscila', 24, 'PR']]
console.log(students[0][1])         //para acessar no array na posição 0 o elemento da posição 1

////////STACK////////
//Passo 1: Modelando
class Stack {
    constructor() {     //constructor() é a função a ser executada
        this.data = []      //this é a referência do dado
        this.top = -1
    }

    push(value) {
        this.top++      //o top passa a ter valor igual a 0 (-1 + 1 = 0)
        this.data[this.top] = value     //o array this.data na posição this.top (posição 0) vai receber o argumento value
        return this.data        //retorna o array
    }

    pop() {
        
    }

    peek() {
        
    }
}
//Passo 2: Utilizado
const stack = new Stack() //new Stack(): momento que instância um novo objeto e transforma a variável stack num objeto com funcionalidades e propriedades próprias dos objetos

