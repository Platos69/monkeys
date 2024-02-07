const entradaNumero = document.getElementById('inNumber')
const saidaResultado = document.getElementById('outTabuada')
const btn = document.getElementById('btnMostrar')

btn.addEventListener('click', () => {
    let i = 1
    let inputNum = entradaNumero.value
    inputNum = Number(inputNum)

    if(inputNum == 0 || isNaN(inputNum)){
        alert('Digite um número valido!!!')
        inputNum.focus()
        return
    }
    let resposta = ''

    do{
        resposta = `${resposta+inputNum} x ${i} = ${inputNum * i} <br>`
        i++
    }while(i <= 1000000)

    saidaResultado.innerHTML = `${resposta}`
})