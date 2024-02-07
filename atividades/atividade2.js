// Dado dois arrays de objetos que representam produtos e preços:
// Crie um novo array de objetos que combine as propriedades de ambos, resultando em objetos que contêm o nome, categoria e preço de cada produto.
// let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
// let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
// let produtosComPreco = produtos.map(produto => {
//     let precoProduto = precos.find(elemento => elemento.nome === produto.nome);
//     return{...produto, preco: precoProduto ? precoProduto.preco : 0 };
//   });
//   console.log(produtosComPreco);



//   2. **Filtrar Produtos por Categoria:**
//   - Utilizando o array de produtos do exercício anterior, crie uma função que recebe a categoria desejada e retorna um novo array contendo apenas os produtos dessa categoria.


// function buscarPorCartegoria(arrayDeProduto, cartegoria){
//     return arrayDeProduto.filter((item) => item.categoria == cartegoria );
// }
// const cartegoriaProduto = buscarPorCartegoria(produtosComPreco, "Eletrônicos");
// console.log(cartegoriaProduto);

// 3. Calcular Preço Total de Compras:
// Dados um array de objetos que representam produtos e um array que representa as quantidades compradas de cada produto:
// Crie uma função que calcule o preço total da compra, considerando as quantidades compradas de cada produto.
// let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
// let quantidades = [3, 1];
// function precoTotal(produtos, quantidades){
//     return produtos.map((produto, index) =>{
//         let precoVenda = produto.preco * quantidades[index];
//         return{ nome: produto.nome,  preco: produto.preco, valorTotal: precoVenda};
//     })
// }

// const precoVendaProduto = precoTotal(produtos, quantidades)
// console.log(precoVendaProduto)

// 4. **Encontrar Produtos com Preço Mínimo:**
//     - Dado um array de objetos que representam produtos:
// - Crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.
//  let mercadoria = [
//       { nome: 'Camiseta', preco: 20 },
//         { nome: 'Celular', preco: 500 },
//           { nome: 'Caneca', preco: 10 }
//         ];

//     function precoMinimo(arrayProduto, valorMinimo){
//         return arrayProduto.filter((produto) => produto.preco >= valorMinimo)
//     }
//     const produtoAcimaDoMinimo = precoMinimo(mercadoria, 10)
//     console.log(produtoAcimaDoMinimo)
        
        

//Estes exercícios envolvem a combinação, filtragem e manipulação de arrays de objetos em JavaScript. Eles são projetados para praticar conceitos como map, filter e manipulação de propriedades de objetos.