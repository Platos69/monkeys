let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

let produtosComPrecos = produtos.map(produtoElemento => {
    let { nome, categoria } = produtoElemento

    let { preco } = precos.find(precoElemento => precoElemento.nome === nome);

    return { nome, categoria, preco };
});

console.log(produtosComPrecos);

debugger

let categoriaMostrarSeletor = () => {
    msgSeletorCategorias = `Filtre seu produto por categoria:`


    for (let i = 0; i < produtosComPrecos.length; i++) {
        msgSeletorCategorias += `\n${produtosComPrecos[i].categoria}`

        if (i == 1) {
            msgSeletorCategorias += `\n\nPor favor, digite o nome da categoria:`
        }
    }

    const categoriaSeletor = prompt(msgSeletorCategorias)

    if (categoriaSeletor == produtosComPrecos[0].categoria) {
        let i = 0
        msgListaProdutos = `Lista dos produtos da categoria: ${produtosComPrecos[i].categoria}`

        msgListaProdutos += `\n${produtosComPrecos[i].nome} - R$${produtosComPrecos[i].preco}`
        msgListaProdutos += `\n\nPor favor, digite o nome do produto:`

        const produtoSeletor = prompt(msgListaProdutos)

    } else if (categoriaSeletor == produtosComPrecos[1].categoria) {
        let i = 1

        msgListaProdutos = `Lista dos produtos da categoria: ${produtosComPrecos[i].categoria}`

        msgListaProdutos += `\n${produtosComPrecos[i].nome} - R$${produtosComPrecos[i].preco}`
        msgListaProdutos += `\n\nPor favor, digite o nome do produto:`

        const produtoSeletor = prompt(msgListaProdutos)
    } else {
        alert('Categoria inválida!')
        location.reload()
    }

}

categoriaMostrarSeletor()

