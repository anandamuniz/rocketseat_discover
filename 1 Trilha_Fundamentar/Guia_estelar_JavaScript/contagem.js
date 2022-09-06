/*DESAFIO

- Contar as palavras e as letras de um texto sem pontuação
*/

let texto = "The latter consisted simply of six hydrocoptic marzelvanes so fitted to the ambifacient lunar waneshaft that side fumbling was effectively prevented"

//QUANTIDADE DE PALAVRAS
let texto_array = texto.split(" ")
console.log(`O texto possui ${texto_array.length} palavras.`)

//QUANTIDADE DE LETRAS
let texto_junto = texto_array.join("")
console.log(`O texto possui ${texto_junto.length} letras.`)


//////////////////////////////////////////////////////////////////////////

/*DESAFIO

- Contar as palavras e as letras de um texto com pontuação
*/

let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sint voluptates optio hic, repellendus ipsa ex officiis eveniet recusandae excepturi mollitia voluptatum aspernatur maxime totam unde quaerat minima? Asperiores, debitis?"

//let text_sem_ponto = text.replace(".", " ")

//let text_sem_virgula = text_sem_ponto.replace(",", " ")

//let text_sem_pontuacao = text_sem_virgula.replace("?", " ")

//let text_sem_pontuacao = /[^a-z]/gi;
//text = text.replace(text_sem_pontuacao, "")
//text = text.replace(/,/g, "")
//console.log(text)
//console.log(text.length)

//tentar com o for


