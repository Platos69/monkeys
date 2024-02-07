let mercadoria = [
    {nome: 'Camiseta', preco: 20},
    {nome: 'Celular', preco: 500},
    {nome: 'Caneca', preco: 10},
]

let minimoValor = (arrayDoProduto, valorMinimo) => {
    return arrayDoProduto.filter((produto) => produto.preco >= valorMinimo)
}

const produtoAcimaDoMinimo = minimoValor(mercadoria, 500)

console.log(produtoAcimaDoMinimo)