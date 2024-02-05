const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
let novoArray = [];

/* ARRAYS | Listar dados: */

// Método .forEach() com a função nele:
array.forEach((elemento, indice, vetor) => {
    
    let ultimoIndice = array.length - 1
    console.log(`${indice + 1} - ${elemento}`)

    if(ultimoIndice === indice) {
        console.log(`Array completa: ${vetor}`)
    }

})

// Método .forEach() com a função fora dele:
// const elevarAoQuadrado = (elemento) => console.log(elemento**2)
// array.forEach(elevarAoQuadrado)

// Método .map() com a função nele:
array.map((elemento) => {

    let triplo = elemento * 3
    novoArray.push(triplo)

})

console.log(novoArray)

// Método .map() com a função fora dele:
// const listarMap = (elemento) => console.log(elemento/5)
// array.map(listarMap)