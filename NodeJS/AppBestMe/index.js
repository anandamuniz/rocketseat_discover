//process.stdout.write("Escrever alguma coisa. \n\n\n")          /*escrever na saída padrão do processo.*/


const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index])
}
ask()

const respostas = []

process.stdin.on("data", data => {
    respostas.push(data.toString().trim())
    if(respostas.length < questions.length) {
        ask(respostas.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        Bacana Ananda!

        O que você aprendeu hoje foi:
        ${respostas[0]}

        O que te deixou aborrecido e você poderia melhorar foi:
        ${respostas[1]}

        O que me deixou feliz hoje:
        ${respostas[2]}

        Você ajudou ${respostas[3]} pessoas hoje.

        Volte amanhã para novas reflexões!!
    `)
})
