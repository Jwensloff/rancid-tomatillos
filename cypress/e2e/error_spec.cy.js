describe('Error Page', () => {
  it.skip('should show an error if the server is unavailable', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { forceNetworkError: true }
    );
    cy.visit('http://localhost:3000/');
    cy.contains('Oops, something went wrong');
  });
  it.skip('should show an error page if the movie details are not found by the server', () => {});
});
