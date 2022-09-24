describe("Login loja de roupa", () =>{
    it("Deve realizar login com sucesso", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.login').click() //clicar
        cy.get('#email').type('teste2021@teste.com.br') //digitar email
        cy.get('#passwd').type('teste') //digitar senha
        cy.get('#SubmitLogin').click() // 
    })
})

//esse # é pra puxar classe front end
//ações a gente pega na docmentação no caso do click
// tem que saber a  rota direitinho pegar o caminho na bussola da pagina e copia
//isso é automatizar o teste, para nao fazelo de forma manual, a pessoa detentora do codigo escreve de forma mais sincrona e depois roda e vai consertando os erros.
//http://dontpad.com/on21-imersao-js-S2-TDD-alunas 


//site para praticar automação de testes: https://reiload-88128.medium.com/top-10-sites-para-praticar-automa%C3%A7%C3%A3o-de-testes-web-1f2f4e54ff80 
//nao precisa subir a pasta coverage
