describe('Error Page', () => {
  it('should show an error if the server is unavailable', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { forceNetworkError: true }
    );
    cy.visit('http://localhost:3000/');
   //error-code should exist 
    cy.contains('TypeError: Failed to fetch');
  });

  it.skip('should show an error page if the movie details are not found by the server', () => {});
  
  it.skip('should navigate back to the homepage if a random url is entered', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'mockMovies.json',
      }
    );

    cy.visit(
      'http://localhost:3000/thisisarandomurlthatausermightenter6363973938'
      );
      // cy.contains('Rancid_Tomatillos');
      // cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4);
      // cy.get('.moviePoster').first().should('have.id', '436270');
      // cy.get('.moviePoster').last().should('have.id', '505642');
    });
  });