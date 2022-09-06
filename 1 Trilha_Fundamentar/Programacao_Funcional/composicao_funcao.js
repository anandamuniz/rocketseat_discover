const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())

//a constante upperCasePeopleThatStartsWithD vai receber todoas as pessoas que começam com a letra D e escrever os nomes delas com letras maiúsculas

//people.filter: O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida, ou seja, cria um novo array com dois elementos ['Dani', 'Diego']

//.map: O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado, vai transformar os elementos do novo array, com dois elementos, em palavras com letras maiúsculas.

//IMPRIME: ['DIEGO', 'DANI']