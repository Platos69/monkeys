// EXERCÍCIOS COM OBJETOS | Combinar Propriedades de Objetos
// Dado dois arrays de objetos que representam produtos e preços, crie um novo array de objetos que combine as propriedades de ambos, resultando em objetos que contêm o nome, categoria e preço de cada produto.

let categorias = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let produtos = [];

let combinarObjetos = categorias.map((p, i) => {
    produtos.push({})
    produtos[i].nome = categorias[i].nome
    produtos[i].categoria = categorias[i].categoria
    produtos[i].preco = precos[i].preco
})
console.log(produtos) 
// [
//   { nome: 'Camiseta', categoria: 'Roupas', preco: 20 },
//   { nome: 'Celular', categoria: 'Eletrônicos', preco: 500 }
// ]
