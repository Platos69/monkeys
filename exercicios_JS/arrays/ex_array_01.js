// EXERCÍCIOS FUNÇÃO & ARRAY | Mapeamento de Função:
// Dado um array de números, crie uma função que receba esse array e retorne um novo array onde cada número é multiplicado por 2.

const arrayInicial = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

const arrayFinal = arrayInicial.map((number) => {
    return number * 2
})

console.log(arrayFinal)