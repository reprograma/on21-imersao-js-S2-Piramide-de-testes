//const { describe } = require("mocha");
//const { it } = require("mocha")
//const cypress = require("cypress")

describe('Login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('teste2021@teste.com.br')
        cy.get('#passwd').type('teste')
        cy.get('#SubmitLogin').click()
    })
})