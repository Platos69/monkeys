// EXERCÍCIOS COM OBJETOS | Combinar Propriedades de Objetos:
// Dado dois arrays de objetos que representam produtos e preços, crie um novo array de objetos que combine as propriedades de ambos, resultando em objetos que contêm o nome, categoria e preço de cada produto.

let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let prodFinal = [];

let todasPropriedades = produtos.map((e, i) => {
    prodFinal.push({})
    prodFinal[i].nome = e.nome
    prodFinal[i].categoria = e.categoria
    prodFinal[i].preco = precos[i].preco
    return prodFinal[i];
})
console.log(todasPropriedades)