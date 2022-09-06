//exportar uma função
//O primeiro irá exportar uma função chamada getFlag();
// * Essa função receberá um argumento do tipo String;
// Essa função deverá buscar dentro do array process.argv a flag desejada, 
//que é a string, e retornar o valor da flag;

//const array = ["Ananda", "casa", "Ananda"] 
const array = process.argv

module.exports = function getFlag(argumento) {
  for(let n=0; n < array.length ; n++) {
        if(argumento == array[n]) {
          return array[n + 1]     //irá pegar o elemento da posição (n+1)
        }
  }
}

//module.exports: para exportar a função
