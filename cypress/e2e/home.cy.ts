describe('template spec Home', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="cypress-home"]').should('exist');
  })
})