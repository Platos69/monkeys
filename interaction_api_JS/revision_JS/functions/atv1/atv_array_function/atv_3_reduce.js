// Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.
// const numeros = [1, 2, 3, 4, 5]

// COM FUNÇÃO PRÓPRIA (MINHA)

// const numeros = [1, 2, 3, 4, 5]
// let soma

// let sumArray = () => {
//     let numberLast = 0
//     for (let i = 0; i < numeros.length; i++) {
//         soma = numeros[i] + numberLast
//         numberLast = soma      
//     }

//     return soma
// }

// console.log(sumArray())

// FUNCAO REDUCE

const numeros = [1, 2, 3, 4, 5]

const initialValue = 0;
let sumAll = () => numeros.reduce((x, y) => x + y, initialValue)

console.log(sumAll())