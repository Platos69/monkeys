let person = {
    name: 'Daniel',
    age: '16',
    height: '1.78',
    address: [
        {
            type: 'Residencial',
            street: 'Rua A',
            city: 'Maceió'
        },
        {
            type: 'Comercial',
            street: 'Rua B',
            city: 'Salvador'
        }
    ],
    greeting() {
        return 'Hello, world'
    }
}

person.address.forEach((value, i) => {
    console.log(`Rua: ${person.address[i].street}`)
})