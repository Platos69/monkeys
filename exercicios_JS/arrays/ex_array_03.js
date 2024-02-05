// EXERCÍCIOS FUNÇÃO & ARRAY | Redução com Função:
// Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.

const numeros = [1, 2, 3, 4, 5]

const somaDosNumeros = numeros.reduce((total, atual) => {
    return 0, total + atual;
})

console.log(somaDosNumeros)