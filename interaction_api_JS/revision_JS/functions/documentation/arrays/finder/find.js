// Ele procura dados, porém caso houver 2 arrays iguais ele irá retornar o primeiro array
// OBS: Assim que ele encontrar o filtro de busca ele irá finalizar

array = [1,2,3,4,5]

bigger = array.find((e) => {
    return e > 3
})

console.log(bigger)