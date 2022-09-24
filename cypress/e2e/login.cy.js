describe('Login', () => {
    it('Deve realizar login com sucesso', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      cy.get('#email').click('teste2021@teste.com.br')
      cy.get('#passwd').type('teste')
      cy.get('#SubmitLogin').click()
    })
  })