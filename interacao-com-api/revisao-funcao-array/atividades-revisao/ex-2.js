//Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos.

let x = 4654654654

converteSegundosHora = (x) => {
    let seg = parseInt(x % 60)
    let min = parseInt((x/60) % 60)
    let hor = parseInt(x /60 / 60 % 60)

    return `${hor}:${min}:${seg}`
}

console.log(converteSegundosHora(x))