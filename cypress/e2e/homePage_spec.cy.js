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

  it('should display movie details when a movie poster is clicked', () => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'blackAdam.json'
    })

    cy.get('#436270').click()
    cy.contains('Black Adam')
    cy.get('img').should("have.attr", "src" , "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg")
    cy.contains('Nearly 5,000')
  })
})