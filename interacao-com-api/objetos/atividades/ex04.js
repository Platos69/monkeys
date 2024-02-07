// Crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.

let produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
];

function precoMinimo(arrayProdutos, valorMinimo){
    return  arrayProdutos.filter((produto) => produto.preco >= valorMinimo);
    // filter sempre cria uma array nova baseada naquela
    // O ponto é usado para filtrar dentro da array
}

const produtoAcimadoMinimo = precoMinimo(produtos, 20)

console.log(produtoAcimadoMinimo)