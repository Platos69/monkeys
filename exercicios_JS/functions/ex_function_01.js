// EXERCÍCIO FUNÇÃO 1
// Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo.

function verifyNumber(x) {
    if(x < 0) {
        return 0;
    } else {
        return 1;
    }
}

// Positives:
console.log(verifyNumber(3)) // 1
console.log(verifyNumber(12)) // 1

// Negatives:
console.log(verifyNumber(-5)) // 0
console.log(verifyNumber(-16)) // 0