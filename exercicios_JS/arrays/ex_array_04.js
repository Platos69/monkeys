// EXERCÍCIOS FUNÇÃO & ARRAY | Combinação de Funções:
// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.

const numeros = [1, 2, 3, 4, 5]
console.log(`Array original: ${numeros}`)

const dobrarNumeros = numeros.map((num) => {
    return num * 2
})
console.log(`Dobro dos números: ${dobrarNumeros}`)

const triplicarNumeros = numeros.map((num) => {
    return num * 3
})
console.log(`Triplo dos números: ${triplicarNumeros}`)

const somaDobroTriplo = numeros.map((num, i) => {
    return dobrarNumeros[i] + triplicarNumeros[i]
})
console.log(`Soma do dobro e do triplo de um número: ${somaDobroTriplo}`)