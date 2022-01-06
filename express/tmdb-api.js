import fetch from 'node-fetch';

export const getGenres = () => {
    return fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    )
        .then(res => res.json())
        .then(json => json.genres);
};