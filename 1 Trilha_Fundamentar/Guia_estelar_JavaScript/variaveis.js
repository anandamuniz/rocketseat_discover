/*VARIÁVEIS - 
    nomes simbólicos para algum valor, atalhos de código ou identificadores. 

    Palavras reservadas: var, let e const 
var e let podem ter seu valor mudado, já a const não.
*/

var clima = "quente"
clima = "frio"
console.log(clima)      //vai imprimir FRIO pois o valor da variável var mudou

let turno = "manhã"
console.log(typeof turno)   //typeof para saber o tipo da variável

const tamanho = "alto"
console.log(tamanho)

//SCOPE

//Block statement

//var é global e também local, pode funcionar fora de um escopo de um bloco

console.log('existe x antes do bloco?', x)

{
   var x = 0
}           

console.log('existe x depois do bloco?', x)
//ao imprimir aparecerá undefined para o primeiro console.log, pois x só foi definido depois da execução do console.log, e para o segundo aparecerá 0.

//let é local, só funciona no escopo onde foi criado
/* por ser local os dois console.log irão imprimir erro
console.log('existe x antes do bloco?', x)
{
   let x = 0
}           
console.log('existe x depois do bloco?', x)*/

{
    let y = 0
    console.log(y)
}

//const é local, só funciona no escopo onde foi criado
const z = 1;
{
    {
        {
            {
                {
                    const z = 0
                    console.log(z)
                }
            }
        }
    }
}
console.log(z)          //o primeiro console.log irá imprimir 0, pois está dentro do em escopo, e o segundo console.log irá imprimir 1

//AGRUPAMENTO
let age, isHuman, isStudent, name

age = 18
isHuman = true
isStudent = false
name = "Ananda"

console.log(age, isHuman, isStudent)
console.log('a ' + name + ' tem ' + age + ' anos.')
console.log(`A ${name} tem ${age} anos.`)