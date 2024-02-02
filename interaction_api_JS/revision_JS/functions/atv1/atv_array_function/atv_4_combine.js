// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.
// const numeros = [1, 2, 3, 4, 5]

const numeros = 2

let doubleNumber = () => numeros * 2

let tripleNumber = () => numeros * 3

let sumTripleDouble = () => tripleNumber() + doubleNumber()

console.log(sumTripleDouble())

