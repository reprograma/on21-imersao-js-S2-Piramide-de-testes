describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
      cy.visit('https://habitica.com/')
      cy.get('.navbar > .btn').click()
      cy.get('#passwordInput').type('teste357')
      cy.get('#usernameInput').type('apps.daviny@outlook.com')
      cy.get(':nth-child(7) > .btn').click()
  })
})

