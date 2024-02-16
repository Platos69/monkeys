const btn = document.getElementById('btn')
const card = document.querySelector('.card')
const textoTextoHtml = document.getElementById('textoPiada')
const textoCategoriaHtml = document.getElementById('textoCategoria')

document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://api.chucknorris.io/jokes/categories'

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
            gerarCategorias(data)
        })
        .catch((err) => console.error(err))
})

gerarCategorias = (categorias) => {
    const select = document.getElementById('select')
    categorias.map((categoria) => {
        const option = document.createElement('option')
        option.innerHTML = `${categoria}`

        select.appendChild(option)
    })
}

btn.addEventListener('click', () => {
    const select = document.getElementById('select').value

    url = `https://api.chucknorris.io/jokes/random?category=${select}`
    console.log(url)

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error ao selecionar piada')
            }
            return response.json()
        })
        .then((data) => {
            console.log(gerarPiada(data))
        })
        .catch((err) => console.error(err))

    card.style.display = 'inherit';
})

const gerarPiada = (piadaConteudo) => {
    piadaTexto = piadaConteudo.value
    piadaCategoria = piadaConteudo.categories[0]

    textoTextoHtml.textContent = piadaTexto
    textoCategoriaHtml.textContent = piadaCategoria
}

