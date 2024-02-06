// EXERCÍCIOS COM OBJETOS | Filtrar Produtos por Categoria
// Utilizando o array de produtos do exercício anterior, crie uma função que recebe a categoria desejada e retorna um novo array contendo apenas os produtos dessa categoria.

let produtos = [
    { nome: 'Camiseta', categoria: 'Roupas', preco: 20 }, 
    { nome: 'Celular', categoria: 'Eletrônicos', preco: 500 }
]
let pesquisa = 'Eletrônicos'

let filtrarPorCategoria = produtos.find((obj) => {
    return obj.categoria === pesquisa
})
console.log(filtrarPorCategoria)