let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = []
let identificadorNome = []
let identificadorPreco = []
let identificadorQtda = []

let produtosComPrecos = produtos.map((produtoElemento) => {
    let { nome, categoria } = produtoElemento
    let { preco } = precos.find((precoElemento) => precoElemento.nome === nome);
    return { nome, categoria, preco };
});

const categoriaMostrarSeletor = () => {
    msgSeletorCategorias = `Filtre seu produto por categoria:`

    for (let i = 0; i < produtosComPrecos.length; i++) {
        msgSeletorCategorias += `\n${produtosComPrecos[i].categoria}`

        if (i == produtosComPrecos.length - 1) {
            msgSeletorCategorias += `\n\nSair\nPor favor, digite o nome da categoria:\n`
        }
    }

    const categoriaSeletor = prompt(msgSeletorCategorias)

    const categoriaSelecionada = (i) => {
        msgListaProdutos = `Lista dos produtos da categoria: ${produtosComPrecos[i].categoria}`

        msgListaProdutos += `\n${produtosComPrecos[i].nome} - R$${produtosComPrecos[i].preco}`
        msgListaProdutos += `\n\nPor favor, digite o nome do produto:`

        const produtoSeletor = prompt(msgListaProdutos)

        if (produtoSeletor == produtosComPrecos[i].nome) {
            let produtoEnviarArray = produtosComPrecos[i].preco
            const quantidadeSeletor = prompt(`Digite a quantia que deseja deste produto: `)

            identificadorNome.push(produtosComPrecos[i].nome)
            identificadorPreco.push(produtosComPrecos[i].preco)
            identificadorQtda.push(quantidadeSeletor)
            quantidades.push(quantidadeSeletor * produtoEnviarArray)

            categoriaMostrarSeletor()
        }
    }

    if (categoriaSeletor == produtosComPrecos[0].categoria) {
        categoriaSelecionada(0)
    } else if (categoriaSeletor == produtosComPrecos[1].categoria) {
        categoriaSelecionada(1)
    } else if (categoriaSeletor == "Sair" || categoriaSeletor == "sair") {
        let somaTodos = quantidades.reduce((x, y) => x + y, initialValue = 0)
        console.log(somaTodos)
        if (somaTodos >= 0) {
            msgRelatorioFinal = ``

            for (let i = 0; i < quantidades.length; i++) {
                msgRelatorioFinal += `${identificadorNome[i]} - Qtda.: R$${identificadorQtda[i]} - Preço unitário: R$${identificadorPreco[i]} - Preço final: ${quantidades[i]}\n`

                if (i == quantidades.length - 1) {
                    msgRelatorioFinal += `\n Preço total: ${somaTodos}`
                }
            }          

            alert(msgRelatorioFinal)
        }
        return
    } else {
        alert('Categoria inválida!')
        categoriaMostrarSeletor()
    }

}

categoriaMostrarSeletor()