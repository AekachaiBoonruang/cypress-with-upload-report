/// <reference types="cypress" />
context('Try Regex', () => {
  beforeEach(() => {
    cy.visit('https://en.wikipedia.org/wiki/Regular_expression')
  })

  it('Example Regex', () => {
    cy.contains('What links here')
    cy.contains(/^What.......here/)
    cy.contains(/here$/)
    cy.contains(/compactness$/)
    cy.contains(/5...2/)
  })
})
