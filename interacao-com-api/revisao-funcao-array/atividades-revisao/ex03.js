// Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.

const numeros = [1, 2, 3, 4, 5]

const somaValor = numeros.reduce( (total, valorAtual) => {
    return total + valorAtual
});

console.log(somaValor);