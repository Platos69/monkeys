let pessoa = 
{
    nome : 'Pedro',
    idade : 17,
    sexo : 'M',
    altura : 1.83,
    enderecos : [
        {
            tipo : 'Residencial',
            rua : 'A',
            cidade : 'Maceió'
        },
        {
            tipo : 'Comercial',
            rua : 'B',
            cidade : 'Rio Largo'
        }
    ],
    saudacao() {
        return 'Olá, Mundo'
    }
};

// console.log(pessoa.saudacao())
// console.log(pessoa.enderecos[0].tipo)

// Listar os endereços desse objeto

pessoa.enderecos.forEach((elemento, index) =>{
    console.log(`Endereço ${index+1} - Rua: ${elemento.rua}`)
})