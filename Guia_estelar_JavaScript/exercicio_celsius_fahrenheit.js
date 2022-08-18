/*
DESAFIO:

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function converter_TEMP(temperatura) {
  
  let valor1 = temperatura.split(" ");
  console.log(valor1)
  let numero_string = valor1.splice(0, 1);
  console.log(numero_string)
  let numero = Number(numero_string);
  console.log(numero)
  
  if (temperatura.includes('C')){
    temp_final = numero * 9/5 + 32
  } else {
    temp_final = (numero - 32) * 5/9 
  }
    return temp_final
  }
  
  console.log(converter_TEMP('30 C'))



///////////////////////////////////////////////////////////////////
//Resolvido pelo Anderson
function converter(temperaturaa) {
    var [valor, simbolo] = temperaturaa.split(' ')
  
    if (simbolo == '°C') {
      temperatura_transformada =  Number(valor) * 9/5 + 32
    } else {
      temperatura_transformada =  (Number(valor) - 32) *  5/9
    }
    return temperatura_transformada
  }
  
  console.log(converter('30 °C'))
  // converter('30 °C')


///////////////////////////////////////////////////////////////////
//Resolvido na aula

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //FLUXO DE ERRO
  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  //FLUXO IDEAL, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  //FLUXO ALTERNATIVO
  if(celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    degreeSign = "F"
  }

  return formula(updatedDegree) + degreeSign

}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('10C'))
  transformDegree('30Z')
} catch (error) {
  console.log(error)
}

