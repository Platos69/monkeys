let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

let produtosComPrecos = produtos.map((e) => {
    let precoProduto = precos.find((item) => item.nome === e.nome)
    return {...e, preco: precoProduto ? precoProduto.preco : 0}
})

console.log(produtosComPrecos)

function buscarPorCategoria(arrayDoProduto, categoria) {
    return arrayDoProduto.filter((e) => e.categoria == categoria)
}

console.log(buscarPorCategoria(produtosComPrecos, "Eletrônicos"))

