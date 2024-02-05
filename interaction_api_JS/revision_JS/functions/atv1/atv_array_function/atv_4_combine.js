// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.
// const numeros = [1, 2, 3, 4, 5]
// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.
// const numeros = [1, 2, 3, 4, 5]

const numeros = [1, 2, 3, 4, 5]

arrayDouble = numeros.map((x) => {
    return x * 2
})

arrayTriple = numeros.map((x) => {
    return x * 3
}) 

arraySumAll = () => {    
    arrayConcat = []
    for (let i = 0; i < arrayDouble.length; i++) {
        for (let j = 0; j < arrayTriple.length; j++) {
            if (j == i) {
                soma = arrayTriple[j] + arrayDouble[i]
                arrayConcat.push(soma)
            }
        }
    }
    return arrayConcat
}

console.log(arraySumAll())