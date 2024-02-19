// !!! INCOMPLETO !!!
// EXERCÍCIOS COM OBJETOS | Filtrar Produtos por Categoria:
// Utilizando o array de produtos do exercício anterior, crie uma função que recebe a categoria desejada e retorna um novo array contendo apenas os produtos dessa categoria.

let produtos = [
    { nome: 'CAMISETA', categoria: 'ROUPAS', preco: 20 },
    { nome: 'CELULAR', categoria: 'ELETRONICOS', preco: 500 }
]

let pesquisa = prompt('Qual categoria deseja pesquisar?')
pesquisa = pesquisa.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

function buscarPorCategoria(array, categoria) {
    return array.filter((item) => item.categoria === categoria)
}

// return `Nome: ${e.nome} \nCategoria: ${e.categoria} \nPreço: ${e.preco}`;
const categoriaProduto = buscarPorCategoria(produtos, pesquisa)