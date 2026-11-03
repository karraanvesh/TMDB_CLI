**Steps to setup the project**

1. Clone the project

`git clone https://github.com/karraanvesh/TMDB_CLI.git <ProjectName>`

2. Move in to the folder structure 

`cd <ProjectName>`

3. Install npm dependencies

`npm install`

4. Create a .env file in your project root directory and add the following environment variables:

- Your TMDB API key, which you can obtain from your TMDB profile.
- The API URLs for the following movie categories: Now Playing, Popular, Top Rated, and Upcoming.

Refer to the [TMDB CLI project requirements](https://roadmap.sh/projects/tmdb-cli) for the API endpoint details.

5. Run the index.js

`Below are the list of commands to run the project`

`node src/index.js --type "playing"`

`node src/index.js --type "popular"`

`node src/index.js --type "top"`

`node src/index.js --type "upcoming"`

## Project URL

https://roadmap.sh/projects/tmdb-cli