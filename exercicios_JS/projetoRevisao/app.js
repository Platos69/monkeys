const inNumero = document.querySelector('#inNumero'),
outTabuada = document.querySelector('#outTabuada'),
btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.addEventListener('click', function() {
    outTabuada.innerHTML = `<h2>Saída dos dados:</h2>`
    let numero = Number(inNumero.value)
    
    if(numero === 0 || isNaN(numero)) {
        alert('Por favor, digite um número válido.')
        inNumero.focus()
        return;
    }

    for(let i = 1; i <= 10; i++) {
        outTabuada.innerHTML += `<h3> ${numero} x ${i} = ${numero * i} </h3>`
    }
})