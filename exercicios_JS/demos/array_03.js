const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

/* ARRAYS | Encontrar dados: */

// Método .find():
const maiorQue30 = array.find((elemento) => {
    return elemento > 30
})
console.log(maiorQue30)

// Método .filter():
const menorQue30 = array.filter((elemento) => {
    return elemento < 30
})
console.log(menorQue30)