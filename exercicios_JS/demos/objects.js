let pessoa = {
    nome: 'Luiz',
    idade: 17,
    altura: 1.83,
    UF_de_nascimento: 'Alagoas',
    numeros_de_telefone: [
        {
            tipo: 'Celular',
            DDD: 82,
            resto: 993974507
        },
        {
            tipo: 'Residencial',
            DDD: 82,
            resto: 906123830
        }
    ],
    enderecos: [
        {
            tipo: 'Residencial',
            rua: 'Rua Fulano de Tal',
            cidade: 'Maceió'
        },
        {
            tipo: 'Comercial',
            rua: 'Rua do Limoeiro',
            cidade: 'Maceió'
        }
    ]
}

// console.log(pessoa.enderecos)

function encontrarImoveis(obj) {
    obj.enderecos.forEach((valor, i) => {
        console.log(`===== IMÓVEL ${i+1} ===== \nTipo: ${obj.enderecos[i].tipo} \nRua: ${obj.enderecos[i].rua} \nCidade: ${obj.enderecos[i].cidade} \n`)
    })
}

encontrarImoveis(pessoa);