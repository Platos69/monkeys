//Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo

let x

retornaValor = (x) => {
    if(x > 0){
        return 1
    }else if(x < 0){
        return 0
    }else if(x == '' || isNaN(x) || x == 0){
        location.reload()
    }
}

x = window.prompt('Digite um número')

console.log(retornaValor(x))