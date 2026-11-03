const tmdbController = require("../controllers/tmdb.controller.js");
const { program }= require("commander");

function tmdbRouter() {
    program
    .requiredOption("--type <description of type of the movie" , "<description of type of the movie")
    .action((options) => {

        const typeOfTheMovie = options.type;

        if(typeOfTheMovie == "playing") {

            tmdbController.getPlayingMoviesController();

        } else if(typeOfTheMovie == "popular") {

            tmdbController.getPopularMoviesController();

        } else if(typeOfTheMovie == "top") {

            tmdbController.getTopMoviesController();

        } else if(typeOfTheMovie == "upcoming") {

            tmdbController.getUpcomingMoviesController();
        }
    });

    program.parse();
}

module.exports = {
    tmdbRouter
};