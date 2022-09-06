/*DESAFIO:

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C
* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let nota = 85
let A = nota >= 90 && nota <= 100
let B = nota >= 80 && nota <= 89
let C = nota >= 70 && nota <= 79
let D = nota >= 60 && nota <= 69
let F = nota < 60  && nota >= 0

if (A) {
    console.log('Sua nota é A.')
} else if(B) {
    console.log('Sua nota é B.')
} else if(C) {
    console.log('Sua nota é C.')
} else if(D) {
    console.log('Sua nota é D.')
} else if(F) {
    console.log('Sua nota é F.')
} else {
    console.log('Essa nota é inválida.')
}


//como função
function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60  && score >= 0

    let scoreFinal;
    
    if (scoreA) {
        scoreFinal = 'Sua nota é A.'
    } else if(scoreB) {
        scoreFinal = 'Sua nota é B.'
    } else if(scoreC) {
        scoreFinal = 'Sua nota é C.'
    } else if(scoreD) {
        scoreFinal = 'Sua nota é D.'
    } else if(scoreF) {
        scoreFinal = 'Sua nota é F.'
    } else {
        scoreFinal = 'Essa nota é inválida.'
    }

    return  scoreFinal 
}

console.log(getScore(102))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(50))
console.log(getScore(62))
console.log(getScore(75))
console.log(getScore(88))
console.log(getScore(91))


