describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
      cy.visit('https://habitica.com/static/home')
      cy.get('.navbar > .btn').click()
      cy.get('#usernameInput').type('artemizadev@2022teste.com.br')
      cy.get('#passwordInput').type('teste2')
      cy.get(':nth-child(7) > .btn').click()
      
  })
})