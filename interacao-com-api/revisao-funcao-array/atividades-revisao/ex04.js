// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.

const array = [1, 2, 3, 4, 5]

function dobrarArray (array) {
    let map = array.map((x) => x * 2)
    return map
}

console.log(dobrarArray(array))

function triplicarArray (array) {
    let map = array.map((x) => x * 3)
    return map
}

console.log(triplicarArray(array))