const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53];

// Listar
// array.forEach((elemento, index) => {
//     console.log(`${index+1} - ${elemento}`)
// })

// const listarDados = (elemento) => console.log(elemento)
// array.forEach(listarDados)

// Metodo MAP

// console.log(array);

// array.map((elemento) => {
//     console.log(`${elemento * 3}`);
// })

// const listarMap = (elemento) => console.log(elemento)
// array.map(listarMap)

// ForEach modifica o Array original, o MAP cria um novo ARRAY preservando o original, ambos são metodos para listar os dados

//Encontrar dados

// FIND: precisa ser muito especifico, ou seja, ele procura o primeiro elemento que atenda a condição

const maiorQue30 = array.find((elemento) => {
    return elemento > 30
});
console.log(maiorQue30)

// FILTER: Cria um filtro onde ele procura todos os elementos que atendam a condição

const maiorQue31 = array.filter((elemento) => {
    return elemento > 31
})

console.log(maiorQue31)