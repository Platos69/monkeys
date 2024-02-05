// Chama uma funcao toda vez que encontrar um array
// OBS: A principal diferença com o map, é que ele ja possui 3 escopos padrão: element, index, array
let numeros = [1,2,3];

numeros.forEach((element, index, array) => {
    elevate = element ** 2
    console.log(elevate, index, array);
});