
const btnCalcular = document.querySelector('#btnCalcular'),
msgErro = document.querySelectorAll('.error-msg');

const areaSaida = document.querySelector('.output-area'),
descricao = document.querySelector('#descricao'),
saida = document.querySelector('#saida');

function mostrarMsgErro(value, index) {
    if(value == '' || isNaN(value)) {
        msgErro[index].style.display = 'block'
        return false;
    } else {
        msgErro[index].style.display = 'none'
        return true;
    }
}

function mostrarDescricao(imc) {
    if (imc <= 16.9) {
        return 'Você está muito abaixo do seu peso normal. É recomendado consultar um nutricionista.'
    } else if (imc <= 18.4) {
        return 'Você está abaixo do seu peso ideal.'
    } else if (imc <= 24.9) {
        return 'Você está na sua faixa de peso ideal.'
    } else if (imc <= 29.9) {
        return 'Você está acima do seu peso ideal.'
    } else if (imc <= 34.9) {
        return 'Você está muito acima do seu peso normal, possuindo obesidade grau I.'
    } else if (imc <= 40) {
        return 'Você está muito acima do seu peso normal, possuindo obesidade grau II.'
    } else {
        return 'Você está muito acima do seu peso normal, possuindo obesidade grau III.'
    }
}

btnCalcular.addEventListener('click', function() {

    let altura = Number(document.querySelector('#inAltura').value)
    let peso = Number(document.querySelector('#inPeso').value)
    let calculoIMC = peso / (altura**2)

    mostrarMsgErro(altura, 0); mostrarMsgErro(peso, 1);

    if(mostrarMsgErro(altura, 0) === true && mostrarMsgErro(peso, 1) === true) {
        areaSaida.style.display = 'block';
        saida.innerHTML = `<strong>Resposta:</strong> ${calculoIMC.toFixed(1)}`;
        descricao.innerHTML = `${mostrarDescricao(calculoIMC)}`;
    } else {
        areaSaida.style.display = 'none';
    }
})