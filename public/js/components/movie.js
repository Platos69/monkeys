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


const timeConvert = (arrayMovie) => {
    const baseNumbers = arrayMovie.Runtime
    let catchedNumbers = '';

    for (let i = 0; i < baseNumbers.length; i++) {
        if (!isNaN(baseNumbers[i])) {
            catchedNumbers += baseNumbers[i];
        }
    }

    catchedNumbers = parseInt(catchedNumbers);

    const correctionOfTimes = (a, b) => {
        while (a >= 60) {
            a -= 60;
            b++;
        }
        return b;
    }

    const convertNumbers = () => {
        let min = catchedNumbers, hrs = 0;
        hrs = correctionOfTimes(min, hrs);
        min -= hrs * 60;

        return `${hrs} Hours and ${min} Minutes`;
    }

    return convertNumbers()
}

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

    imageMovie.src = arrayMovie.Poster
    titleMovie.textContent += arrayMovie.Title
    timeMovie.textContent += timeConvert(arrayMovie)
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