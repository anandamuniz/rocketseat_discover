////FOR

for (let i = 0; i < 10 ; i++) {
    console.log(i)
}

//outra maneira de usar o for
for (let ih = 100; ih > 0 ; ih--) {
    if(ih === 50){
        break;          //para antes de chegar no 50
    }
    console.log(ih)
}

//para ignorar um valor
for (let ix = 10; ix > 0 ; ix--) {
    if(ix === 5){
        continue;          //ignora o valor 5 e continua a rodar
    }
    console.log(ix)
}


/////WHILE (enquanto)

let t = 0;
while(t < 10) {
    console.log(t)

    t++
}

//usado quando não se sabe o momento da parada
let ty = 2514526880;
while(ty > 10) {
    console.log(ty)

    ty /= 50            //não sabe-se quantas vezes o programa vai rodar 
}


////FOR...OF
let nomes = 'Ananda'
let nomess = ['Ananda', 'Mona', 'Luiz']

for(let caracter of nomess) {
    console.log(caracter)
}

///FOR...IN
let pessoah = {
    name: 'Mona',
    idade: 1,
    peso: 4.2
}

for(let propriedade in pessoah) {
    console.log(propriedade)
    console.log(pessoah[propriedade])           //imprime o valor de cada propriedade
}