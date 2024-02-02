// EXERCÍCIO FUNÇÃO 02
// Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos.

// RESOLUÇÃO 02:
let horas, minutos, restante

let adicionarUnidadeTempo = function(x, y) {
    while(x >= 60) {
        y++
        x -= 60
    }
    return y;
}

function paraHorasMinutosSegundos(segundos) {
    restante = segundos

    minutos = adicionarUnidadeTempo(restante, minutos)
    horas = adicionarUnidadeTempo(minutos, horas)
    
    restante -= minutos*60
    minutos -= horas*60

    return `${horas}:${minutos}:${restante}`
}

let executarFuncao = (tempo) => {
    horas = 0; minutos = 0; restante = 0;
    return paraHorasMinutosSegundos(tempo);
}

console.log(executarFuncao(60))
console.log(executarFuncao(312))
console.log(executarFuncao(1643))
console.log(executarFuncao(3600))