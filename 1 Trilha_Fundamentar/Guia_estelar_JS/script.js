//1. Defina uma variável
let weight;

//2. Que tipo de dado é a variável a cima?
console.log(typeof weight) // Para saber o tipo de variável. Resposta: undefined, pois não foi atribuido nenhum valor a variável.

/*3. Declare uma variável e atribua valores para cada um dos dados:
    name:
    age:
    stars:
    isSubscribed:
*/

{
    let name, age, stars, isSubscribed
        name = 'Ananda'
        age = 28
        stars = 2.5
        isSubscribed = true

    console.log('A ' + name + ' tem ' + age + ' anos' + ', ' + stars + ' e ' + isSubscribed + '.')
        
}

/*4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
*/

{
    let student = {
        name: 'Ananda',
        age: 28,
        weight: 50.5,
        isSubscribed: true,
    }
    console.log(typeof student)
    console.log(`${student.name} de idade ${student.age}, pesa ${student.weight} kg.`)
}

/*5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente um Array vazio
*/

{
    let students = [

    ]
}

/*6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
*/

{
    let student = {
        name: 'Ananda',
        age: 28,
        weight: 50.5,
        isSubscribed: true,
    }
    
    students = [
         student        
    ]
    console.log(students)
}

/* Coloque no console o valor da posição zero do Array acima
*/

{
    let student = {
        name: 'Ananda',
        age: 28,
        weight: 50.5,
        isSubscribed: true,
    }
    
    students = [
         student        
    ]
    console.log(students[0])
}

/* Crie um novo student e coloque na posição 1 do Array studentes
*/

{
    let student = {
        name: 'Ananda',
        age: 28,
        weight: 50.5,
        isSubscribed: true,
    }

    let student_2 = {
        name: 'Anderson',
        age: 33,
        weight: 70.5,
        isSubscribed: false,
    }
    
    students = [
         student,
         student_2
    ]
    console.log(students)

    // ou students[1] = student_2
}

/*9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
*/
// Undefined, pois var é uma variável global e ela é elevada (hoisting), assim ela está definida mas não foi atribuido nenhum valor

{
    console.log(a)
    var a = 1
}