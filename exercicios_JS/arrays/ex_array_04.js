// !!! INCOMPLETO !!!
// EXERCÍCIOS FUNÇÃO & ARRAY | Combinação de Funções:
// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.

const numeros = [1, 2, 3, 4, 5]
console.log(`Array original: ${numeros}`)

// const dobroDosNumeros = numeros.map((elemento) => {
//     return elemento * 2
// })
// console.log(`Dobro dos números: ${dobroDosNumeros}`)

// const triploDosNumeros = numeros.map((elemento) => {
//     return elemento * 3
// })
// console.log(`Triplo dos números: ${triploDosNumeros}`)

const aumentarNumeros = numeros.map((elemento, i) => {
    let dobroDosNumeros = [], triploDosNumeros = [];

    dobroDosNumeros.push(elemento * 2)
    triploDosNumeros.push(elemento * 3)
    
    let somaDobroTriplo = dobroDosNumeros[i] + triploDosNumeros[i]
    console.log(dobroDosNumeros[i])
})

// console.log(aumentarNumeros)