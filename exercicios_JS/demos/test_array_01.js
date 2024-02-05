const array = [12, 14, 16, 18, 20]
console.log(array[2]) // Imprime o valor no índice 2
console.log(array) // Imprime todo o array | [ 12, 14, 16, 18, 20 ]

/* ARRAYS | Métodos comuns: */
array.push(22)      // Adiciona um novo elemento no fim do vetor
console.log(array)  // [ 12, 14, 16, 18, 20, 22 ]

array.unshift(10)   // Adiciona um novo elemento no seu começo
console.log(array)  // [ 10, 12, 14, 16, 18, 20, 22 ]

array.pop()         // Remove o último elemento
console.log(array)  // [ 10, 12, 14, 16, 18, 20 ]

array.shift()       // Remove o primeiro elemento
console.log(array)  // [ 12, 14, 16, 18, 20 ]