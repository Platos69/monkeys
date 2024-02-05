// EXERCÍCIO FUNÇÃO 02
// Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos.

let horas, minutos, restante

function converterTempoSimples(segundos) {
    horas = 0; minutos = 0;
    restante = segundos

    while(restante >= 60) {
        minutos++
        restante -= 60;
    }

    while(minutos >= 60) {
        horas++
        minutos -= 60;
    }

    return `${horas}:${minutos}:${restante}`;
}

console.log(converterTempoSimples(60))
console.log(converterTempoSimples(312))
console.log(converterTempoSimples(1643))
console.log(converterTempoSimples(3600))