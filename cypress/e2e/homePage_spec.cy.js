describe('homepage', () => {

  beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mockMovies.json'
    })
    cy.visit('http://localhost:3000/')
    })
  
  it('should see the title and a movie collection when visiting the website', () => {
    cy.contains('Rancid_Tomatillos')
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4)
    cy.get('.moviePoster').first().should('have.id', '436270')
    cy.get('.moviePoster').last().should('have.id', '505642')
  })
})