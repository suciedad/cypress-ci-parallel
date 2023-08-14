describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-test="main-header"]').contains('Vite + React')
  })

  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-test="counter"]')
      .contains('count is 0')
      .click()
      .contains('count is 1')
  })
})