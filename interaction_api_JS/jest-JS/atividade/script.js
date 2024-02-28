// Temperatura

function ConversorDeTemperatura(temperatura) {
  const converterTemperatura = (temperatura * 1.8) + 32;
  return converterTemperatura;
}

// Bitcoin (303614.11)

function ConverterBitcoinParaReal(bitcoins) {
  const bitcoinPreco = 303614.11;
  const calcularConversao = bitcoins * bitcoinPreco;
  return calcularConversao;
}

// Comparar senhas

function CompararSenha(a, b) {
  if (a === b) {
    return true;
  }
}

module.exports = CompararSenha;
module.exports = ConversorDeTemperatura;
module.exports = ConverterBitcoinParaReal;
