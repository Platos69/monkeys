// EXERCÍCIOS COM OBJETOS | Encontrar Produtos com Preço Mínimo:
// Dado um array de objetos que representam produtos, crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.

let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];

let qtdComprada = produtos.map(function(item, i) {
    return item.preco * quantidades[i]
})
console.log(qtdComprada)