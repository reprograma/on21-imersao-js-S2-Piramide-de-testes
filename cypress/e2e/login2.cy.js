describe('Login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.visit('https://habitica.com/')
        cy.get('.navbar > .btn').click()
        cy.get('#passwordInput').type('1124ggaa')
        cy.get('#usernameInput').type('annyrural@hotmail.com')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('.daily > .tasks-list > .quick-add').click()
        cy.get('.daily > .tasks-list > .quick-add').type('Nova tarefa ')
        cy.get('.daily > .tasks-list > .quick-add').type('{enter}') 
        cy.get('.todo > .tasks-list > .quick-add').click()
        cy.get('.todo > .tasks-list > .quick-add').type('aaaaaaa')
        cy.get('.todo > .tasks-list > .quick-add').type('{enter}')
        cy.get('.reward > .tasks-list > .quick-add').click()
        cy.get('.reward > .tasks-list > .quick-add').type('Recompensa')
        cy.get('.reward > .tasks-list > .quick-add').type('{enter}')
        cy.get('.habit > .tasks-list > .quick-add').click()
        cy.get('.habit > .tasks-list > .quick-add').type('Habilidade')
        cy.get('.habit > .tasks-list > .quick-add').type('{enter}')
    })
  })