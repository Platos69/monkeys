// EXERCÍCIOS COM OBJETOS | Calcular Preço Total de Compras:
// Dados um array de objetos que representam produtos e um array que representa as quantidades compradas de cada produto, crie uma função que calcule o preço total da compra, considerando as quantidades compradas de cada produto.

let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];

let qtdProdutos = produtos.map((produto, indice) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        valorTotal: produto.preco * quantidades[indice]
    }
})
console.log(qtdProdutos)