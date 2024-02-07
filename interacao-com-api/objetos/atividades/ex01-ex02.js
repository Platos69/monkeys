//Crie um novo array de objetos que combine as propriedades de ambos, resultando em objetos que contêm o nome, categoria e preço de cada produto.

let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
// let listaProdutos = [{}]

function juntarProdPreco(produtos, precos){
    return produtos.map((produto) => {
        let precoProduto = precos.find((preco) => preco.nome === produto.nome)
        return {
            nome:produto.nome,
            categoria:produto.categoria,
            preco:precoProduto.preco
        }
    })
}

let juntaProduto = juntarProdPreco(produtos, precos)

// console.log(juntarProdPreco(produtos, precos))

//AT 02

//Utilizando o array de produtos do exercício anterior, crie uma função que recebe a categoria desejada e retorna um novo array contendo apenas os produtos dessa categoria.

function buscarCategoria (arrayProdutos, categoria){
    return arrayProdutos.filter((produto) => produto.categoria === categoria);
}

const categoriaProduto = buscarCategoria(juntaProduto, 'Eletrônicos')
console.log(categoriaProduto)