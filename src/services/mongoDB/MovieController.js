
const topRatedMovies = [];


const fetchTopRatedMovies = async() =>{
    const api_key = "87c4dddfb7b5e8e87adfe3f8f74ea22d";
    const topMovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=pt-BR&page=1`);
    const topMoviesJson = await topMovies.json();
    return topMoviesJson;
}

export{fetchTopRatedMovies}