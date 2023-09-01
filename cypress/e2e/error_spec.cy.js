describe('Error handling', () => {
  it('should show an error if the server is unavailable', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { forceNetworkError: true }
    );
    cy.visit('http://localhost:3000/');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/error');
    });
    cy.contains('TypeError: Failed to fetch');
  });

  it('should display 404 page with button and allow a user to return home if the user enters a random url', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'mockMovies.json',
      }
    );
    cy.visit('http://localhost:3000/436270/trailer/potato');
    cy.get('.img-wrapper').should('exist');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/436270/trailer/potato');
    });
    cy.get('.error-to-home-button').should('exist');
    cy.get('.error-to-home-button').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
    cy.contains('Rancid_Tomatillos');
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4);
    cy.get('.moviePoster').first().should('have.id', '436270');
    cy.get('.moviePoster').last().should('have.id', '505642');
  });

  it('should show an error page if it is a 500 level error', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
        body: {},
      }
    ).as('serverError');
    cy.visit('http://localhost:3000/');
    cy.get('.error-page-wrapper').contains(
      'Oops! Something went wrong, try again later.'
    );
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/error');
    });
  });
});
