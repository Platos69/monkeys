/* eslint-disable no-undef */

// Temperatura

// const ConversorDeTemperatura = require('./script');

// describe('Testa a função conversorDeTemperatura()', () => {
//   test('Verifica se 100ºC é igual a 212ºF', () => {
//     const temperatura = 100;
//     const converterTemperatura = ConversorDeTemperatura(temperatura);
//     expect(converterTemperatura).toBe(212);
//   });
// });

// Bitcoin

// const ConverterBitcoinParaReal = require('./script');

// describe('Testa a função ConverterBitcoinParaReal()', () => {
//   test('Verifica se 2 bitcoins é igual a 607228.22 ', () => {
//     const bitcoin = 2;
//     const converterParaReal = ConverterBitcoinParaReal(bitcoin);
//     expect(converterParaReal).toBe(607228.22);
//   });
// });

// Comparar Senha

const CompararSenhas = require('./script');

describe('Testa a função CompararSenha()', () => {
  test('Verifica se as senhas são iguais', () => {
    const compararSenha = CompararSenhas('a', 'a');
    expect(compararSenha).toBe(true);
  });
});
