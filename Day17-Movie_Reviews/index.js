const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGU0NjFjMTk4ZWQyYzU5NTIwYTdkNmFhNGU5NzIyMiIsInN1YiI6IjY1NTYzYTZiNjdiNjEzNDVjZjA1YTRlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EhtNw65KM7jtn5IzJ-LyMsA3WZlaNKfIDeOeFW6ko5o";
const POP_URL = `https://api.themoviedb.org/3/movie/popular?include_adult=true&page=1`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=`;
const SEARCH_POSTFIX = `&include_adult=true&language=en-US&page=1`;
const img_path = `https://image.tmdb.org/t/p/w1280`;

const NO_MOVIES = `<div class="no-movies">
<h3 class = "main">NO MOVIES FOUND</h3>
<h3 class = "shadow">NO MOVIES FOUND</h3>
</div>`

//We can do url = `https://api.themoviedb.org/3/movie/popular&page=1&api_key=${API_KEY}` as well, but that gives away the api_key in the url itself

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};

//We can do this but this causes nested .then conditions, instead we use async/await
// fetch(POP_URL, options)
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(err => console.error('error:' + err));

async function getPopMovies(url, headers){
    const res = await fetch(POP_URL, options);
    const data = await res.json();

    const movies = data['results'];
    //movies is now an array of movie datas
    //console.log(movies);

    putMovieTags(movies);
}


async function getSearchMovies(toSearch, url, headers){
    $(".container").html("");
    url = url+toSearch+SEARCH_POSTFIX;
    const res = await fetch(url, headers);
    const data = await res.json();

    const movies = data['results'];

    setTimeout(() => {
        putMovieTags(movies);
    }, 2000);
};

async function putMovieTags(movies){
    if(movies.length === 0){        
        $(".container").append(NO_MOVIES);
    }
    else{
        movies.forEach(elem => {
            const MOVIE_TITLE = elem.title;
            const RATING = elem.vote_average;
            const DESCRIPTION = elem.overview;
            let IMAGE_TAG = elem.poster_path;
            if(IMAGE_TAG === null){
                IMAGE_TAG = "https://imgs.search.brave.com/QMg8oiewkwE5ybsZHeHC1ljkZzVSGEIdsHHTCR8bTkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc"
            }
            else{
                IMAGE_TAG = img_path + IMAGE_TAG;
            }
            const COLOR_CLASS = colorReturn(RATING);

            const MOVIE_TAG = `<div class="movie">
                <img src="${IMAGE_TAG}" />
                <div class="movie-info">
                    <h3>${MOVIE_TITLE}</h3>
                    <span class=${COLOR_CLASS}>${RATING}</span>
                </div>

                <div class="movie-review hidden">
                    <h3>Overview</h3>
                    <p>${DESCRIPTION}</p>
                </div>
                </div>`;
            
            $('.container').append(MOVIE_TAG);
        });
    }
}

function colorReturn(rating){
    if(rating >= 8)
        return "green";
    else if(rating >= 5)
        return "orange";
    return "red";
}

$('form').submit((e) => {
    e.preventDefault(); //So it doesn't refresh the page
    const toSearch = $(".search")[0].value;

    if(toSearch.trim() !== ""){
        getSearchMovies(toSearch, SEARCH_URL, options);
    }
    $(".search")[0].value = "";
});

function helper(){
    getPopMovies(POP_URL, options);
}

setTimeout(helper, 2000);

// fetch("https://api.themoviedb.org/3/search/movie?query=hello&include_adult=true&language=en-US&page=1", options).then(res => res.json()).then(res => console.log(res));