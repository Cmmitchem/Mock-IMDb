const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "9124a0e1d58a5aa17a09d4d274dd8fec";
const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
let image;
const imageApiUrl = "https://api.themoviedb.org/3/configuration?api_key=9124a0e1d58a5aa17a09d4d274dd8fec";


async function fetchMoviesNowPlaying() {
    const response = await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    const configuration = await fetch(`${apiBaseUrl}/configuration?api_key=${apiKey}`);
    const config = await configuration.json();
    
    console.log(config);
   

    const imsize = config.poster_sizes; 
    const IMbase_url = config.base_url;
    const poster =jsonResponse.results.poster_path;
    ;

    const images =await fetch(`${imageBaseUrl}${poster}`);
    const imageResp = await images.json();
    console.log(imageResp);


}
// async function fetchMovieImages(){
//     const configuration = await fetch(`${apiBaseUrl}/configuration?api_key=${apiKey}`);
//     const config = await configuration.json();
    
//     console.log(config);
   

//     const imsize = config.size; 
//     const IMbase_url = config.base_url;

//     const images =await fetch(`${IMbase_url}${imsize}`)
// }



fetchMoviesNowPlaying();