const { tmdbConfig } = require("../config/tmdb.config.js");

async function getPlayingMoviesRepository() {
    try {
        const url = tmdbConfig.playingMoviesUrl + `api_key=${tmdbConfig.tmdbApiKey}`;

        const playingMovies = await fetch(url , {
            method: 'GET'
        });

        if(!playingMovies.ok) {
            throw new Error("Something went wrong")
        }
        
        const response = await playingMovies.json();

        return response;

    } catch (error) {
        console.log(error);
    }
}

async function getPopularMoviesRepository() {
    try {
        const url = tmdbConfig.popularMoviesUrl + `api_key=${tmdbConfig.tmdbApiKey}`;

        const popularMovies = await fetch(url , {
            method : "GET"
        });

        if(!popularMovies.ok) {
            throw new Error("Something went wrong");
        }
        
        const response = await popularMovies.json();

        return response;

    } catch (error) {
        console.log(error);
    }
}

async function getTopMoviesRepository() {
    try {
        const url = tmdbConfig.topMoviesUrl + `api_key=${tmdbConfig.tmdbApiKey}`;

        const topMovies = await fetch(url , {
            method : "GET"
        });

        if(!topMovies.ok) {
            throw new Error("Something went wrong");
        }
        
        const response = await topMovies.json();

        return response;

    } catch (error) {
        console.log(error);
    }
}

async function getUpcomingMoviesRepository() {
    try {
        const url = tmdbConfig.upcomingMoviesUrl + `api_key=${tmdbConfig.tmdbApiKey}`;

        const upcomingMovies = await fetch(url , {
            method : "GET"
        });

        if(!upcomingMovies.ok) {
            throw new Error("Something went wrong");
        }
        
        const response = await upcomingMovies.json();

        return response;

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPlayingMoviesRepository,
    getPopularMoviesRepository,
    getTopMoviesRepository,
    getUpcomingMoviesRepository
};