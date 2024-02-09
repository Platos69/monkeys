// TRY

// const SomaTodos = (x, y) => {
//     subtracao = x - y
//     return soma = x + subtracao
// }

// const promessa = () => {
//     try {
//         SomaTodos(10, 5).then(() => {
//             console.log('A soma foi um sucesso')
//         }).catch((err) => {
//             console.log('Error na tentativa de soma: ' + err)
//         })
//         return 5 + undefined
//     } catch (err) {
//         console.log('Error no servidor: ' + err)
//     }
// }

// const promessa = Promise.resolve(5+5)

// promessa.then((value) => {
//     return value + 5
// }).then((value) => {
//     return value * 2
// })

// console.log(promessa)

// PROMISE, THEN, CATCH 1

// Promise.resolve('Olá,' * 4)
// .then(value => {
//     if(Number.isNaN(value)) {
//         throw new 'Valores inválidos'
//     }
// })
// .catch((err) => {
//     console.log('Um error ocorreu: ' + err)
// })

// PROMISE, THEN, CATCH 2

// checkNumber = (n) => {
//     return new Promise((resolve, reject) => {
//         if (n > 20) {
//             resolve('O número é maior que 20')
//         } else {
//             reject(new Error('Número inválido, error: '))
//         }
//     })
// }

// const n1 = checkNumber(25)
// const n2 = checkNumber(19)

// n1.then((value) => {
//     console.log('O resultado é: ' + value)
// }).catch((err) => {
//     console.log('Error: ' +  err)
// })

// ASYNC, AWAIT 1

// let calculaComDelay = async (x, y) => {
//     return x + y
// }

// calculaComDelay(5, 5).then((value) => {
//     console.log('Soma realizada com sucesso: ' + value)
// }).catch((err) => {
//     throw new Error('Erro na soma: ' + err)
// })

// ASYNC, AWAIT 2

function delayResponse() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolveste a promessa...')    
        }, 8000);
    })
}

async function delayedCall() {
    console.log('Chamando a promessa')
    const resultado = await delayResponse()
    console.log('O resultado chegou: ' + resultado)
}

delayedCall()