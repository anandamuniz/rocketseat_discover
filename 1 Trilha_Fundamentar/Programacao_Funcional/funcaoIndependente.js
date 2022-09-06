const random = (number, Math) =>        //essa função precisa receber do mundo externo o API Math como argumento, assim agora essa API pertence à função, e recebe um número como argumento
    Math.floor(Math.random() * number);     //tanto o Math como o number são argumentos, logo a função só depende dos dados passado para ela
                                        //é uma função pura

//recursive
//Calcular o fatorial de um número
const fatorial = x => {

    if(x === 0) {
        return 1
    }
    return x * fatorial(x-1)
}

/*Para x=3:
if (3 === 0) false
return 3 * factorial(2)
if (2 === 0) false
return 3 * 2 * factorial(1)
if (3 === 0) false
return 3 * 2 * 1 * factorial(0)
if (3 === 0) true return 1
return 3 * 2 * 1 * 1 = 6
*/