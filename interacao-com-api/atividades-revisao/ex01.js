//Dado um array de números, crie uma função que receba esse array e retorne um novo array onde cada número é multiplicado por 2.

const array = [1, 2, 3, 4]

function dobrarArray (array) {
    let map = array.map((x) => x * 2)
    return map
}

console.log(dobrarArray(array))