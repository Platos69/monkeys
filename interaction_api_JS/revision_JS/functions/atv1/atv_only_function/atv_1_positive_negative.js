// Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo

let verifyNumber = (x) => {
    if(x < 0) {
        return "Número negativo"
    } else {
        return 'Número positivo'
    }
}

console.log(verifyNumber(0))