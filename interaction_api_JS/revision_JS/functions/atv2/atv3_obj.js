let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 98];

let qtdProdutos = produtos.map((produto, indice) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        valorTotal: produto.preco * quantidades[indice]
    }
})
console.log(qtdProdutos)
