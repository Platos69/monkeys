// http://www.omdbapi.com/?apikey=601322fb
// request: http://www.omdbapi.com/?apikey=601322fb&s=spiderman

baseURL = `http://www.omdbapi.com/?apikey=601322fb&type=movie`

const searchBox = document.getElementById('searchBox')
const resultsListContainer = document.querySelector('.results-list-movies')

searchBox.addEventListener('keyup', (pressed) => {
    if (!resultsListContainer.classList.contains('clicked')) {
        resultsListContainer.classList.add('clicked')
        if (pressed.key === "Enter") {
            resultURL = `${baseURL}&t=${searchBox.value}`
            fetch(resultURL)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Erro de rede! Código: ${response.status}`)
                    }
                    return response.json()
                })
                .then((data) => {
                    showMoviesList(data.Search)
                })
                .catch((err) => {
                    throw new Error(`Error na obtenção de dados! Código: ${err}`)
                })
        }
    } else {
        if (pressed.key === "Enter") {
            resultsListContainer.classList.remove('clicked')
            resultsListContainer.innerHTML = ''
            resultURL = `${baseURL}&s=${searchBox.value}`
            fetch(resultURL)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Erro de rede! Código: ${response.status}`)
                    }
                    return response.json()
                })
                .then((data) => {
                    showMoviesList(data.Search)
                })
                .catch((err) => {
                    throw new Error(`Error na obtenção de dados! Código: ${err}`)
                })
        }
    }
})

searchBox.addEventListener('keypress', () => {
    resultURL = `${baseURL}&s=${searchBox.value}`
    fetch(resultURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro de rede! Código: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            showMoviesList(data.Search)
        })
        .catch((err) => {
            throw new Error(`Error na obtenção de dados! Código: ${err}`)
        })
})

const showMoviesListSearch = (arrayMovies) => {
    const searchListContainer = document.querySelector('.search-list')
    searchListContainer.classList.remove('hidden')
    arrayMovies.forEach((e) => {
        const searchItem = document.createElement('div')
        searchItem.classList.add =
            searchItem.innerHTML =
            `
            <img src="${e.Poster}" alt="">
                <div>
                    <h4>${e.Title}</h3>
                    <p>${e.Year}</p>
                </div>
            </div>
        `

    });
}

const showMoviesList = (arrayMovies) => {
    arrayMovies.forEach((e) => {
        const resultsContainer = document.createElement('div')
        resultsContainer.classList.add('results-container')
        resultsContainer.innerHTML =
            `
        <div class="results-container">
            <img src="${e.Poster}" alt="">
            <h4>${e.Title}</h4>
            <h5>Ano: ${e.Year}</h5>
        </div>
        `

        resultsContainer.addEventListener('click', () => {
            showDetailsOfMovie(e.Title)
        })

        resultsListContainer.appendChild(resultsContainer)
    });
}

const showDetailsOfMovie = (titleMovie) => {
    window.location.href = `./pages/movie.html?movie=${titleMovie}`
}