// Busca arrays de acordo com parametros, porém ele não para no primeiro resultado 

array = [1,2,3,4,5]

bigger = array.filter((e) => {
    return e > 3
})

console.log(bigger)