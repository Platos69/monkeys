// EXERCÍCIOS COM OBJETOS | Encontrar Produtos com Preço Mínimo:
// Dado um array de objetos que representam produtos, crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.

let produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
];

let filtrarPorPreco = function(array, precoMinimo) {
    return array.filter((produto) => produto.preco >= precoMinimo)
}

const maioresQueOMinimo = filtrarPorPreco(produtos, 15)
console.log(maioresQueOMinimo)