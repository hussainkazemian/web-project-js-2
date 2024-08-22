
`/*
const kohde = document.querySelector('#target');
const elokuvat = [];

const lkm = prompt('syökää elokuvien lkm');

for(let i = 0; i < lkm; i++) {


const title = prompt ('Syötä elokuvan nimi');
const rating = prompt('Syötä arvio (1-5)');
const elokuva = {
  title,
  rating,
};
elokuvat.push(elokuva);

}

elokuvat.sort((a, b) => b.rating - a.rating);

console.log (elokuvat);

for(const elokuva of elokuvat){
  const html = `/*``<tr>
                <td> ${elokuva.title}</td>
                <td>${elokuva.rating}</td>
                `/`</tr>`;
  kohde.insertAdjacentHTML('beforeend',html);
}
*/

'use strict';

// Get the table body element
const target = document.querySelector('#target');
const movies = [];

// Prompt the user for the number of movies
let numMovies = parseInt(prompt('Enter the number of movies:'), 10);

// Input validation
if (isNaN(numMovies) || numMovies <= 0) {
    alert('Please enter a valid number greater than 0.');
} else {
    // Collect movie details from the user
    for (let i = 0; i < numMovies; i++) {
        const title = prompt('Enter the movie title:');
        let rating = parseInt(prompt('Enter the rating (1-5):'), 10);

        // Validate the rating
        while (isNaN(rating) || rating < 1 || rating > 5) {
            alert('Please enter a valid rating between 1 and 5.');
            rating = parseInt(prompt('Enter the rating (1-5):'), 10);
        }

        // Create a movie object and add it to the array
        const movie = {
            title,
            rating,
        };
        movies.push(movie);
    }

    // Sort movies by rating in descending order
    movies.sort((a, b) => b.rating - a.rating);

    // Display the sorted movies in the table
    for (const movie of movies) {
        const html = `<tr>
                        <td>${movie.title}</td>
                        <td>${movie.rating}</td>
                      </tr>`;
        target.insertAdjacentHTML('beforeend', html);
    }

    // Determine and display the highest-rated movie
    if (movies.length > 0) {
        const highestRatedMovie = movies[0];
        const highestRatedHtml = `<p><strong>Highest Rated Movie:</strong> ${highestRatedMovie.title} with a rating of ${highestRatedMovie.rating}</p>`;
        document.querySelector('main').insertAdjacentHTML('beforeend', highestRatedHtml);
    }
}


