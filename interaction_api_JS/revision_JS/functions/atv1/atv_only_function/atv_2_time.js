//Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos. 

simplifyTime = (x, y) => {
    while(x >= 60) {
        x -= 60
        y++
    }
    return y
}

convertTime = (x) => {
    let min = 0, hrs = 0, segs = x

    min = simplifyTime(segs, min)
    hrs = simplifyTime(min, hrs)    
    
    segs -= min * 60
    min -= hrs * 60

    return `${hrs}Hrs ${min}Min ${segs}Segs`
}

console.log(convertTime(3600))