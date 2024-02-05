// Interace de Usuário:

// Uma interface simpes com campos de entrada para altura (em metros) e peso (em quilogramas)

//Botão "Calcular IMC' para iniciar o cálculo"

// Exibição do resultado do IMC após o cálculo

// Calculo do IMC:

// Divide peso pela altura ao quadrado

// A fórmula é : IMC = peso / (altura * altura)

// /Após o cálculo, o resultado do IMC deve ser exibido na inteface do Usuário

// Além do resultado numérico, deve ser exibida uma mensagem indicando a faixa de IMC correspondente (abaixo do peso)

// menor que 16,9 Muito abaixo do peso

// 17 a 18,4 Abaixo do peso

// 18.5 a 24.9 peso normal

// 25 a 29.9 acima do peso

// 30 a 34,9 obesidade grau I

// 35 a 40 obesidade grau II

// Maior que 40 Obesidade grau III

const peso = document.querySelector('#boxpeso')
const altura = document.querySelector('#boxaltura')
const button = document.querySelector('#bnt')

button.addEventListener('click', () =>{

        let pesoFinal = peso.value 
        let alturaFinal = altura.value
        let imc = pesoFinal / (alturaFinal * alturaFinal)
        
        if(imc <= 16.9){
            alert("Você está muito abaixo do peso")
        }else if(imc >= 17 && imc <= 18.4){
            alert("Você está abaixo do peso")
        }else if(imc >= 18.5 && imc <= 24.9){
            alert("Você está no peso normal")
        }else if(imc >= 25 && imc <= 29.9){
            alert("Você está acima do peso")
        }else if(imc >= 30 && imc <= 34.9){
            alert("Você está em Obesidade grau I")
        }else if(imc >= 35 && imc <= 40){
            alert("Você está em Obesidade grau II")
        }else if(imc >40){
            alert("Você está em Obesidade grau III")
        }else{
            alert("Preencha os campos corretamente.")
        }
})


