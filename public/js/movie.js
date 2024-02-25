document.addEventListener('DOMContentLoaded', () => {
    const URLparam = new URLSearchParams(window.location.search)
    const param = URLparam.get('movie')

    document.title = param
    const baseURL = `http://www.omdbapi.com/?apikey=601322fb&type=movie&t=${param}&plot=full`

    fetch(baseURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error na rede: Código: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            showDetailsOfMovie(data)
        })
        .catch((err) => {
            throw new Error(`Error na obtenção de dados: ${err}`)
        })
})

// CONVERTER PRA TEMPO

const showDetailsOfMovie = (arrayMovie) => {
    const imageMovie = document.querySelector('img')
    const titleMovie = document.querySelector('.title')
    const timeMovie = document.querySelector('.time')
    const synopsisMovie = document.querySelector('.synopsis')
    const yearMovie = document.querySelector('.year')
    const ratingMovie = document.querySelector('.rating')
    const releasedMovie = document.querySelector('.released')
    const genreMovie = document.querySelector('.genre')
    const writerMovie = document.querySelector('.writer')
    const actorsMovie = document.querySelector('.actors')
    const awardsMovie = document.querySelector('.awards')

    const baseNumbers = arrayMovie.Runtime;
    let catchedNumbers = 0;
    
    for (let i = 0; i < baseNumbers.length; i++) {
        if (!isNaN(baseNumbers[i])) {
            catchedNumbers += parseInt(baseNumbers[i]);
        }
    }
    
    console.log(catchedNumbers);

    let convertTime = arrayMovie.Runtime / 60

    imageMovie.src = arrayMovie.Poster
    titleMovie.textContent += arrayMovie.Title
    timeMovie.textContent += arrayMovie.Runtime
    synopsisMovie.textContent += arrayMovie.Plot
    yearMovie.textContent += arrayMovie.Year
    ratingMovie.textContent += arrayMovie.Rated
    releasedMovie.textContent += arrayMovie.Released
    genreMovie.textContent += arrayMovie.Genre
    writerMovie.textContent += arrayMovie.Writer
    actorsMovie.textContent += arrayMovie.Actors
    awardsMovie.textContent += arrayMovie.Awards

    const ratedMoviesList = document.querySelector('.rated-critics')

    arrayMovie.Ratings.forEach(e => {
        const evaluation = document.createElement('ul')
        evaluation.innerHTML =
            `
        <h4>${e.Source}</h4>
        <p>${e.Value}</p>

        `
        ratedMoviesList.appendChild(evaluation)
    });
}