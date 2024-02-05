// Remove o último dado

array = [1,2,3,4,5]

for (let i = 0; i < array.length - 2; i++) {
    array.shift()   
}

console.log(array)