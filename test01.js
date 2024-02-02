// Exemplo 01
/* function subtracao(a, b) {
    const calc = a - b
    return calc
}

let resultado = 'O resultado da subtração é ' + subtracao(6, 4)
console.log(resultado)
*/

// Exemplo 02
/* function soma(a, b) {
    const calc = a + b

    if (calc > 5) {
        return `Valor não permitido!`
    } else {
        return calc;
    }
}
*/

// console.log(soma(2, 2)); // 4
// console.log(soma(2)); // NaN
// console.log(soma()); // NaN
// console.log(soma(2, 2, 3, 4, 5, 6)); // 4
// console.log(soma(2, 4)); // Valor não permitido!
// console.log(soma(2, 4) + 5); // Valor não permitido!5


// Exemplo 03
/* function multiplicacao() {
    let multi = 1

    for (i in arguments) {
        multi *= arguments[i]
    }

    return multi;
}
*/

// console.log(multiplicacao()) // 1
// console.log(multiplicacao(5)) // 5
// console.log(multiplicacao(5, 5)) // 25
// console.log(multiplicacao(5, 5, 5)) // 125
// console.log(multiplicacao(5, 5, 5, 5)) // 625

// Exemplo 04
/* let dobro = (x) => {
    return 2 * x
}

let triplo = (x) => 3 * x;

console.log(dobro(4))
console.log(triplo(4))

oi = _ => `Oi, weezers!`
console.log(oi());
*/

// Exemplo 05
const soma = function(x, y) {
    return x + y
}

const resultado = function(a, b, operacao=soma) {
    console.log(operacao(a, b))
}

resultado(5, 5)
resultado(5, 5, soma)
resultado(5, 5, function(x, y) {
    return x * y
})
resultado(5, 5, (x, y) => x / y)