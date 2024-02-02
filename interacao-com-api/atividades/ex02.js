//Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos.

let x = 5000

converteSegundosHora = (x) => {
    let hora = 0
    let seg = 0
    let min = x / 60
    if(min > 60){
        hora ++
        min = min - 60
        min=min.toFixed(1)
        
    }else{

    }
    let final = `${hora}:${min}:${seg}`
    return final
}


console.log(converteSegundosHora(x))