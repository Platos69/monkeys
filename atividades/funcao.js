// ATIVIDADE 1: Dado um array de números, crie uma função que receba esse array e retorne um novo array onde cada número é multiplicado por 2.

// const i = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53];

// function vezesdois(){;
//     return i.map((x) => x *2 );    
// }

// console.log(vezesdois(i));

// ATIVIDADE 2 :Dado um array de palavras, crie uma função que receba esse array e retorne um novo array contendo apenas as palavras que têm mais de três letras.

// const array = ["sol", "livro", "lua", "cadeira", "mesa", "mar"];

//     function palavras(){
//         const result = array.filter((array) => array.length > 3); 
//         return result
//     }

//    console.log(palavras(array));

// ATIVIDADE 3: Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.

// const numeros = [1, 2, 3, 4, 5]

// function valorTotal(){

// const valorInicial = 0;
// const array = numeros.reduce((dobro, triplo) => dobro + triplo, valorInicial);
// return array
// }
// console.log(valorTotal(numeros));

// ATIVIDADE 4: Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.


// function dobro(numeros){
//     return numeros * 2
   
// }

// function triplo(numeros){
//     return numeros * 3
    
// }

// function soma(numeros){
//     return dobro(numeros) + triplo(numeros)   
// }

// console.log(soma(5))*/

// //EXERCICIO 1: Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo

// // const verifica1 = (num) => num > 0 ? 1 : 0


// function hora(secs) {
//     const horas = secs / 3600;
//     const restoHoras = secs % 3600;
//     const minutos = restoHoras / 60;
//     const segundos = restoHoras % 60;

//     return `Horas:${horas.toFixed(0)} minutos:${minutos.toFixed(0)} segundos:${segundos.toFixed(0)}`;
// }

// console.log(hora(6343));