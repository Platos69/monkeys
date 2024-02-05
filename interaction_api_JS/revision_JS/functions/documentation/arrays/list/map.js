// Realiza uma funcao para cada array
// OBS: Ela devolve um novo array, diferente de .forEach

const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

const multi = array.map((x) => { 
    return x * 2
}
)

console.log(multi)
