describe('From movie details:', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'mockMovies.json',
      }
    );
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',
      {
        statusCode: 200,
        fixture: 'blackAdam.json',
      }
    );
    cy.visit('http://localhost:3000/');
  });

  it('should display movie details when a movie poster is clicked and return when x button is clicked', () => {
    cy.get('#436270').click();
    cy.contains('Black Adam');
    cy.get('img').should(
      'have.attr',
      'src',
      'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg'
    );
    cy.contains('Nearly 5,000');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/436270');
    });
    cy.get('.trailer-btn').should('exist');
    cy.get('.trailer-btn').click();
    cy.location().should((loc)=> {
      expect(loc.pathname).to.eq('/436270/trailer')})
  });

  it('should not have a trailer button if no trailers exist', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos',
      {
        statusCode: 200,
        fixture: 'emptyTrailer.json',
      }
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
      }
    );
    cy.get('#436270').click();
    cy.get('.trailer-btn').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/436270/trailer');
    });
    cy.get('iframe').should('exist');
    cy.get('.back-to-movie-details-button').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/436270');
    });
    cy.contains('Black Adam');
    cy.get('.trailer-btn').click();
    cy.get('.back-to-home-button').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
    cy.contains('Rancid_Tomatillos');

    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4);
    cy.get('.moviePoster').first().should('have.id', '436270');
    cy.get('.moviePoster').last().should('have.id', '1013860');
  });
});


