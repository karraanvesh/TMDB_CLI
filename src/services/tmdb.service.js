const tmdbRepository = require("./../repositories/tmdb.repository.js");

async function getPlayingMoviesService() {
    try {
        const playingMovies = await tmdbRepository.getPlayingMoviesRepository();

        return playingMovies;
    } catch (error) {
        console.log(error);
    }
}

async function getPopularMoviesService() {
    try {
        const popularMovies = await tmdbRepository.getPopularMoviesRepository();

        return popularMovies;
    } catch (error) {
        console.log(error);
    }
}

async function getTopMoviesService() {
    try {
        const topMovies = await tmdbRepository.getTopMoviesRepository();

        return topMovies;
    } catch (error) {
        console.log(error);
    }
}

async function getUpcomingMoviesService() {
    try {
        const upcomingMovies = await tmdbRepository.getUpcomingMoviesRepository();

        return upcomingMovies;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPlayingMoviesService,
    getPopularMoviesService,
    getTopMoviesService,
    getUpcomingMoviesService
};