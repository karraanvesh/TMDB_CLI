const dotenv = require("dotenv");

// the config() loads the environment variables from .env file into the process.env
dotenv.config();

console.log(`Environment variables loaded`);

const tmdbConfig = {
    tmdbApiKey        : process.env.api_key || "undefined",
    playingMoviesUrl  : process.env.playingMoviesUrl || "undefined",
    popularMoviesUrl  : process.env.popularMoviesUrl || "undefined",
    topMoviesUrl      : process.env.topMoviesUrl || "undefined",
    upcomingMoviesUrl : process.env.upcomingMoviesUrl || "undefined"  
};

module.exports = {
    tmdbConfig
};