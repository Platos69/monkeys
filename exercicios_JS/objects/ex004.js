// EXERCÍCIOS COM OBJETOS | Encontrar Produtos com Preço Mínimo:
// Dado um array de objetos que representam produtos, crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.

let produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
];

let filtrarPorPreco = function(valorMin) {
    let produtosMaioresQueX = [];

    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].preco > valorMin) {
            produtosMaioresQueX.push(produtos[i])
        }
    }

    return produtosMaioresQueX
}

console.log(filtrarPorPreco(15))