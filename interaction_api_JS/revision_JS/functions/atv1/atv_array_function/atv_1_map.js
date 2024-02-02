//Dado um array de números, crie uma função que receba esse array e retorne um novo array onde cada número é multiplicado por 2.
//const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

// CODIGO SEM MAP
// const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
// let arrayClone = []

// debugger
// for (let i = 0; i < array.length; i++) {
//     let multi
//     multi = array[i] * 2
//     arrayClone.push(multi)
    
// }

// console.log(arrayClone)


// CODIGO COM MAP
// const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

// const multi = array.map((x) => x * 2)

// console.log(multi)
 
// CODIGO COM FUNCTION (MINHA)
const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
let arrayMulti = []

let multi = (x) => {
    let soma = x * 2 
    arrayMulti.push(soma)
}

for (let i = 0; i < array.length; i++) {
   multi(array[i])  
}

console.log(arrayMulti)