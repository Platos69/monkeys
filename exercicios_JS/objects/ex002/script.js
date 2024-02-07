// EXERCÍCIOS COM OBJETOS | Filtrar Produtos por Categoria
// Utilizando o array de produtos do exercício anterior, crie uma função que recebe a categoria desejada e retorna um novo array contendo apenas os produtos dessa categoria.

let pesquisa, produtos = [
    { nome: 'CAMISETA', categoria: 'ROUPAS', preco: 20 }, 
    { nome: 'CELULAR', categoria: 'ELETRONICOS', preco: 500 }
]

do {
    pesquisa = prompt('Que categoria de produto deseja encontrar?')
    if(pesquisa === '') {
        confirm('Parece que você não digitou nada. Tente novamente.')
    }
} while(pesquisa === '')

pesquisa = pesquisa.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

let filtrarPorCategoria = produtos.find((objeto) => {
    if(objeto.categoria === pesquisa) {
        let precoConvertido = objeto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        window.alert(`Nome: ${objeto.nome} \nCategoria: ${objeto.categoria} \nPreço: ${precoConvertido}`)
    }
})