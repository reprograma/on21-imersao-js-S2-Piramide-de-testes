describe('Login', () => {
    it('Criar Hábitos', () => {
        cy.visit('https://habitica.com/')
        cy.get('.navbar > .btn').click()
        //cy.get('#usernameInput').type('testerosalyne@gmail.com')
        cy.get('#usernameInput').type('rosalyne')
        cy.get('#passwordInput').type('12345678')
        cy.get(':nth-child(7) > .btn').click()
  
    })
  })