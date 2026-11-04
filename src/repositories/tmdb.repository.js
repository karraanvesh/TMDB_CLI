const { tmdbConfig } = require("../config/tmdb.config.js");

async function getPlayingMoviesRepository() {
    try {
        const url = tmdbConfig.playingMoviesUrl + `?api_key=${tmdbConfig.tmdbApiKey}`;

        /**
         * fetch API is an application programming interface which helps us to fetch
         * network resources . It fecilitates to make basic HTTP requests like GET , POST etc.
         * 
         * It is a promise based syntax and this promise is going to be resolved by the response 
         * object.
         */

        const playingMovies = await fetch(url , {
            method: 'GET'
        });

        /**
         * fetch does not throw any error for 404 or 500 etc status codes . 
         * Here , we need to check whether the response.ok property is 
         * true or false.
         * 
         * If true , then the request which we made has been succeeded or else request is not succeeded.
         */
        if(!playingMovies.ok) {
            throw new Error(`HTTP Error Status: ${playingMovies.status}`);
        }

        /**
         * The response object received from the server contains body property. This body
         * contains the data returned by the server. Fecth does not directly provides us the data 
         * returned by the server , instead we need to manually parse the data .
         * 
         * response.json() : To convert the data returned by the server into json.
         * response.text() : To convert the data returned by the server into plain text ( string ).
         * response.blod() : for images or audio usecases.
         */
        
        const response = await playingMovies.json();

        return response;

    } catch (error) {
        console.log(error);
    }
}

async function getPopularMoviesRepository() {
    try {
        const url = tmdbConfig.popularMoviesUrl + `?api_key=${tmdbConfig.tmdbApiKey}`;

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
        const url = tmdbConfig.topMoviesUrl + `?api_key=${tmdbConfig.tmdbApiKey}`;

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
        const url = tmdbConfig.upcomingMoviesUrl + `?api_key=${tmdbConfig.tmdbApiKey}`;

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