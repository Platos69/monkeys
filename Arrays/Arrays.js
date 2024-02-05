const array = [21,6,84,24,86,11,93,59,96,53] 
const array1 = [21,6,84,24,86,11,93,59,96,53]

// //Listar as informações dentro do Array
// array.forEach((elemento, indice)=>{
//     console.log(`${indice} - ${elemento}`)
// })
// const listarDados = (elemento)  => console.log(elemento)
// array.forEach(listarDados)
// array1.forEach(listarDados)

//Método MAP

// console.log(array)
// array.map((elemento) => 
//     {console.group(elemento*3)
// })
// const listarMap = elemento => console.log(elemento)
// array1.map(listarMap)

const maiorQue30 = array.find((elemento) => {
    return elemento > 30
})
console.log(maiorQue30)
const maiorQue31 = array.filter((elemento) => {
    return elemento > 31
})