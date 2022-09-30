describe('Login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('teste1984@teste.com.br')
        cy.get('#passwd').type('axe')
        cy.get('#SubmitLogin').click()
    })
})