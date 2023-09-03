describe('homepage', () => {

  beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mockMovies.json'
    })
    cy.visit('http://localhost:3000/')
    cy.location().should((loc)=> {
      expect(loc.pathname).to.eq('/')})
    })
  
  it('should see the title and a movie collection when visiting the website', () => {
    cy.contains('Rancid_Tomatillos')
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4)
    cy.get('.moviePoster').first().should('have.id', '436270')
    cy.get('.moviePoster').last().should('have.id', '1013860')
  })

  it('should filter movies by title', () => {
    cy.get('.exitSearch-btn').should('not.exist')
    cy.get('.search').type('black')
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 2)
    cy.get('.moviePoster').first().should('have.id', '436270')
    cy.get('.moviePoster').last().should('have.id', '505642')
    cy.get('.exitSearch-btn').should('exist')

    cy.get('.exitSearch-btn').click()
    cy.get('.exitSearch-btn').should('not.exist')
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4)
    cy.get('.moviePoster').first().should('have.id', '436270')
    cy.get('.moviePoster').last().should('have.id', '1013860')

    cy.get('.search').type('BLACK')
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 2)
    cy.get('.moviePoster').first().should('have.id', '436270')
    cy.get('.moviePoster').last().should('have.id', '505642')
    cy.get('.search').clear()
    cy.get('.exitSearch-btn').should('not.exist')
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 4)
    cy.get('.moviePoster').first().should('have.id', '436270')
    cy.get('.moviePoster').last().should('have.id', '1013860')

    cy.get('.search').type('dfjkdfn')
    cy.get('.moviesContainer').find('.moviePoster').should('have.length', 0)
    cy.contains('Movie not found.')
  })
})