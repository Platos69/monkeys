let pessoa = {
    nome: 'Carlos',
    idade: 31,
    altura: 1.82,
    enderecos: [
        {
            tipo: 'Residencial',
            rua: 'Rua A',
           cidade: 'Maceió', 
        },
        {  tipo: 'Comercial',
        rua: 'Rua B',
       cidade: 'Xique Xique da Bahia', }
    ],
    saudacao(){
        return `Hello, World!`
    }
 }
// console.log(pessoa.nome)
// console.log(pessoa.saudacao())
// console.log(pessoa.enderecos[0].tipo)

// Listar todos os endereços desse Obj

const listar = pessoa.enderecos.forEach((elemento) => console.log(elemento))


