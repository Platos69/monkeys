// http://www.omdbapi.com/?apikey=601322fb
// request: http://www.omdbapi.com/?apikey=601322fb&type=movie

baseURL = `http://www.omdbapi.com/?apikey=601322fb&type=movie`

const searchBox = document.getElementById('searchBox')
const resultsListContainer = document.querySelector('.results-list-movies')
const titleResult = document.querySelector('.title-results')
const searchListContainer = document.querySelector('.search-list')

searchBox.addEventListener('keyup', (pressed) => {
    if (!resultsListContainer.classList.contains('clicked')) {
        resultsListContainer.classList.add('clicked')
    } else {
        resultsListContainer.classList.remove('clicked')
        resultsListContainer.innerHTML = ''
        searchListContainer.innerHTML = ''
    }

    if (pressed.key === "Enter") {
        titleResult.innerHTML = ''
        searchListContainer.innerHTML = ''
        searchListContainer.classList.add('hidden')
        titleResult.innerHTML += `Resultados para : ${searchBox.value}`
        catchMoviesURL(showMoviesList)
    } else {
        catchMoviesURL(showMoviesListSearch)
    }
})

searchListContainer.addEventListener('mouseleave', (event) => {
    if (!searchListContainer.contains(event.relatedTarget)) {
        hiddenSearchList()
    }
})

const hiddenSearchList = () => {
    if (searchListContainer.classList.contains('hidden')) {
        searchListContainer.classList.remove('hidden')
    } else {
        searchListContainer.classList.add('hidden')
    }
}

const catchMoviesURL = (typeCatch) => {
    resultURL = `${baseURL}&s=${searchBox.value}`
    fetch(resultURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro de rede! Código: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            typeCatch(data.Search)
        })
        .catch((err) => {
            throw new Error(`Error na obtenção de dados! Código: ${err}`)
        })
}

const showMoviesListSearch = (arrayMovies) => {
    searchListContainer.classList.remove('hidden')
    arrayMovies.forEach((e) => {
        const searchItem = document.createElement('div')
        let imgPoster = e.Poster

        if (imgPoster == 'N/A') {
            imgPoster = './public/images/not_found.png'
        }

        searchItem.innerHTML =
            `
            <img src="${imgPoster}" alt="">
                <div>
                    <h4>${e.Title}</h3>
                    <p>${e.Year}</p>
                </div>
            </div>
            `

        searchItem.addEventListener('click', () => {
            showDetailsOfMovie(e.Title)
        })

        searchListContainer.appendChild(searchItem)
    });
}

const showMoviesList = (arrayMovies) => {
    if (!arrayMovies || !Array.isArray(arrayMovies)) {
        resultsListContainer.innerHTML = 
        `
            <h3><strong>Nada encontrado</strong></h3>
        `
    } else {
        arrayMovies.forEach((e) => {
            const resultsContainer = document.createElement('div')
            resultsContainer.classList.add('results-container')
            let imgPoster = e.Poster
    
            if (imgPoster == 'N/A') {
                imgPoster = './public/images/not_found.png'
            }
    
            resultsContainer.innerHTML =
                `
            <div class="result-container">
                <img class="img-results-list" src="${imgPoster}" alt="">
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
    }

const showDetailsOfMovie = (titleMovie) => {
    window.location.href = `./pages/movie.html?movie=${titleMovie}`
}