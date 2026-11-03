const tmdbService = require("../services/tmdb.service.js");

async function getPlayingMoviesController() {
    try {
        const movies = await tmdbService.getPlayingMoviesService();

        console.log(`Movies playing in TMDB are : `);
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

async function getPopularMoviesController() {
    try {
        const movies = await tmdbService.getPopularMoviesService();

        console.log(`Popular movies in TMDB are : `);
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

async function getTopMoviesController() {
    try {
        const movies = await tmdbService.getTopMoviesService();

        console.log(`Top Movies in TMDB are : `);
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

async function getUpcomingMoviesController() {
    try {
        const movies = await tmdbService.getUpcomingMoviesService();

        console.log(`Upcoming Movies in TMDB are : `);
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPlayingMoviesController,
    getPopularMoviesController,
    getTopMoviesController,
    getUpcomingMoviesController
};