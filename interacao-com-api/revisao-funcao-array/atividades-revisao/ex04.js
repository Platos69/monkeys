// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.

const array = [1, 2, 3, 4, 5]
let c = 0
let arrFinal = []
let soma

function dobrarArray (array) {
    let map = array.map((x) => x * 2)
    return map
}

console.log(dobrarArray(array))

let arrdobro = dobrarArray(array)

function triplicarArray (array) {
    let map = array.map((x) => x * 3)
    return map
}

let arrtriplo = triplicarArray(array)

console.log(triplicarArray(array))

do{
    soma = arrdobro[c] + arrtriplo[c]
    arrFinal.push(soma)
    c++
}while(c < array.length)

console.log(arrFinal)