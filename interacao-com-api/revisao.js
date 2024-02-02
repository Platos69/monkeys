// exemplo 01

// function triplo(x){
//     return 3 * x
// }

// let triploAnon = function(x){
//     return 3 * x
// }

// triplo = (x) =>{
//     return 3*x //caso eu usar as chaves na arrow function, É OBRIGATORIO O USO DE CHAVES!!!
// }

// triplo = (x) => 3 * x

// console.log(triplo(5) + 5)

// oi = (nome) => `Oi, ${nome}`

// console.log(oi('Pedro'))

// oi = _ => 'oi!'

// console.log(oi())

// Exemplo 02

const soma = function(x, y){
    return x + y
}

const subtracao = function(x, y){
    return x - y
}

const resultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

console.log(resultado(1, 2))
console.log(resultado(3, 2, subtracao))
console.log(resultado(3, 2, soma))
// console.log(resultado(1, 2, function(x, y){
//     return x*y
// }))
// resultado (3, 3, (x, y) => x/y)