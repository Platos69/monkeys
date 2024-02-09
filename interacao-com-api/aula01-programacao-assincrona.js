// console.log('Primeiro Console')

// // setTimeout(() => {
// //     console.log('Segundo Console')
// // }, 3000)

// // Essa função define um tempo para aparecer a função desejada, acompanhada de um tempo em milisegundos

// //sempre que for desenvolver aplicações trabalhando com api's, usa-se programação assincrona

// setInterval(() => {
//     console.log('Segundo Console')
// }, 2)

//ele cria uma repetição infinita com um intervalo de tempo entre eles

// console.log('Terceiro Console')



                                                        // promise //

// const promise = Promise.resolve(5+5)

// console.log('logica 1')

// promise.then((value) => {
//     console.log('A soma ' + value)
//     return value
// })
// .then((value) => {
//     console.log(`Menos 1 fica: ${value-1}`)
//     return value
// }).then((value) => {
//     console.log(`Vezes 2 fica: ${value*2}`)
// })

// console.log('logica 2')

//O promisse demora pra acontecer, deixando um site mais dinamico tirando sua estaticidade

// Catch: Adiciona um callback caso a solicitação tenha algum problema

// Promise.resolve('olá,' *4)
// .then((data) => {
//     if(Number.isNaN(data)){
//         throw new Error('Valores Invalidos')
//     }
// })
// .catch((err)=>{
//     console.log(`Um erro ocorreu ${err}`)
// })

// function checkNumber(n){
//     return new Promise((resolve, reject) => {
//         if(n > 20){
//             resolve(`O Número ${n} é maior que 20`)
//         }else{
//             reject(new Error(`O valor ${n} é menor que 20!`))
//         }
//     })
// }

// const numero1 = checkNumber(25)
// const numero2 = checkNumber(10)

// numero1.then((value) => {
//     console.log(`O retorno é: ${value}`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// numero2.then((value) => {
//     console.log(`O retorno é: ${value}`)
// }).catch((err) => {
//     console.log(`${err}`)
// })

// console.log('Teste Async')

// //Por mais que usamos o console.log, podemos incrementar o async com o DOM também!

// Async: Atribuo esse termo a todas que possuem um delay de execução e Await: Atribuo a esse termo para o resultado que é esperado

// async function calculaComDelay(x, y){
//     return x * y
// }

// calculaComDelay(1, 2)
// .then((value) => {
//     console.log(`O resultado é ${value}`)
// })
// .catch((err) => {
//     console.log(`${err}`)
// })

function respostaComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolveu a promessa')
        }, 8000)
    })
}

async function chamadaDelay(){
    console.log('Chamando a promise, aguarde...')
    const resultado = await respostaComDelay()
    console.log(`O Resultado é ${resultado}`)
}

chamadaDelay()