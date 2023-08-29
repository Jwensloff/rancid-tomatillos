// be on a movie details page
// click the trailer button
// render the trailer page
// display the trailer
// from the trailer page click back button
// return back to movie details
//AND click home and return to the homepage

describe('From movie details:', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'mockMovies.json',
      },
    );
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',
      {
        statusCode: 200,
        fixture: 'blackAdam.json',
      },
    );
    cy.visit('http://localhost:3000/');
  });

  it('should display movie details when a movie poster is clicked and return when x button is clicked', () => {
    cy.get('#436270').click();
    cy.contains('Black Adam');
    cy.get('img').should(
      'have.attr',
      'src',
      'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    );
    cy.contains('Nearly 5,000');
    cy.get('.trailer-btn').should('exist');
    cy.get('.button').click();
    /// enter the url once we implement router
  });

  it('should not have a trailer button if no trailers exist', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos',
      {
        statusCode: 200,
        fixture: 'emptyTrailer.json',
      },
    );
    cy.get('#436270').click();
    cy.get('.trailer-btn').should('not.exist');
      
  });

  it('should be able to navigate between pages', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos',
      {
        statusCode: 200,
        fixture: 'blackAdamTrailer.json',
      },
    );
    cy.get('#436270').click();
    cy.get('.trailer-btn').click();
    // check that we car on the trailer page
    cy.get('iframe').should('exist');
    cy.get('.back-to-movie-details-button').click();
    // check that we are on the movie details page for black adam
    cy.contains('Black Adam');
    cy.get('.trailer-btn').click();
    cy.get('.back-to-home-button').click();
    // check that we are on the homepage
    cy.contains('Rancid_Tomatillos');
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4);
    cy.get('.moviePoster').first().should('have.id', '436270');
    cy.get('.moviePoster').last().should('have.id', '505642');
  });
});
