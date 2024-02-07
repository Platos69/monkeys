let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

let produtosComPrecos = produtos.map((produtoElemento) => {
    let { nome, categoria } = produtoElemento
    let { preco } = precos.find((precoElemento) => precoElemento.nome === nome);
    return { nome, categoria, preco };
});