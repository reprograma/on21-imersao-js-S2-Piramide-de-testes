1- Acesso ao site
  1.1 - acessar o site https://habitica.com/static/home
  1.2 - criar um usuário para o site.
    1.2.1 - escolher um nome para o usuário que contenha de 1 a 20 caracteres dentre eles, apenas letras de A a Z, números de 0 a 9, hifens ou underlines, não podendo ser incluso quaisquer termos inapropriados.
    1.2.2 - digitar o email válido.
    1.2.3 - digitar a senha 
    1.2.4 - digitar a confirmação da senha
  1.3 - clicar em registe-se para confirmar a inclusão do usuário
  

2- Configurar tarefas  
 2.1 - caso queira utilizar a tarefa diária já pré definida, pode alterar as informações clicando em cima da tarefa.
 2.2 - para criar uma tarefa diária basta adicionar o nome dentro do campo adicionar diária.
 
3- Configurar hábito
 3.1 - caso queria utilizar um hábito já pré definido só clicar no botão + e adicionar o seu painel
 3.2 - para criar um hábito basta adiconar o nome dentro do campo adicionar hábito

4- Configurar recompensa
 4.1 - caso queria utlizar uma recompensa pré definida, pode alterar as informações clicando em cima da recompensa.
 4.2 - para criar uma repompensa basta adicionar o nome dentro do campo adicionar recompensa.


Acesso ao site pelo Cypress, com o cadastro do usuário realizado anteriormente
 describe('Login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.visit('https://habitica.com/')
        cy.get('.navbar > .btn').click()
        cy.get('#passwordInput').type('1124ggaa')
        cy.get('#usernameInput').type('annyrural@hotmail.com')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('.daily > .tasks-list > .quick-add').click()
        cy.get('.daily > .tasks-list > .quick-add').type('Nova tarefa diária')
        cy.get('.daily > .tasks-list > .quick-add').type('{enter}') 
        cy.get('.todo > .tasks-list > .quick-add').click()
        cy.get('.todo > .tasks-list > .quick-add').type('Novo afazer')
        cy.get('.todo > .tasks-list > .quick-add').type('{enter}')
        cy.get('.reward > .tasks-list > .quick-add').click()
        cy.get('.reward > .tasks-list > .quick-add').type('Nova Recompensa')
        cy.get('.reward > .tasks-list > .quick-add').type('{enter}')
        cy.get('.habit > .tasks-list > .quick-add').click()
        cy.get('.habit > .tasks-list > .quick-add').type('Nova Habilidade')
        cy.get('.habit > .tasks-list > .quick-add').type('{enter}')
    })
  })