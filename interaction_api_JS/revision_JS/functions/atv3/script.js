const inNumero = document.querySelector("#inNumero")
const outTabuada = document.querySelector("#outTabuada")
const numberOutput = document.querySelector("#numberOutput")
const btnMostrar = document.querySelector("#btnMostrar")

btnMostrar.addEventListener('click', () => {
    let numero = Number(inNumero.value)
    for (let i = 1; i <= 10; i++) {
        multi = numero * i
        const tabuada = document.createElement('h5');
        numberOutput.appendChild(tabuada)
        tabuada.textContent = `${numero} x ${i} = ${multi}`
    }
})