// Dado um array de palavras, crie uma função que receba esse array e retorne um novo array contendo apenas as palavras que têm mais de três letras.
// const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

// FUNCAO PROPRIA
// const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
// const palavrasLimit = []

// let limitWords = (x) => {
//     if(x.length == 3) {
//         palavrasLimit.push(x)
//     }
// }

// for (let i = 0; i < palavras.length; i++) {
//     limitWords(palavras[i])
// }

// console.log(palavrasLimit)

// FUNCAO FILTER
const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

const result = palavras.filter((palavras) => palavras.length == 3);

console.log(result)