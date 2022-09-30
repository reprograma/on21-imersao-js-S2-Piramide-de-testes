## Cenários/Casos de Teste - Habitica

#Cenário: Cadastrar usuário válido com sucesso
Teste 1
Dado que estou na tela de cadastro de usuário
E informar um nome de usuário válido
E informar um e-mail válido
E informar uma senha
E informar a senha novamente na confirmação de senha
E clicar no botão "registre-se"
Então a mensagem informando que o usuário foi criado com sucesso é exibida
E a tela de boas vindas é exibida com o botão "Comece já"


#Cenário: Cadastrar usuário inválido
Teste 1
Dado que estou na tela de cadastro de usuário
E informar um usuário que já existe
E informar um e-mail válido
E informar uma senha
E informar a senha novamente na confirmação de senha
E clicar no botão "registre-se"
Então a mensagem informando que o usuário informado já existe é exibida e o cadastro não é efetuado

Teste 2
Dado que estou na tela de cadastro de usuário
E informar um nome de usuário válido
E informar um e-mail sem o "@"
E informar uma senha
E informar a senha novamente na confirmação de senha
E clicar no botão "registre-se"
Então a mensagem informando que o e-mail é inválido é exibida e o cadastro não é efetuado

Teste 3
Dado que estou na tela de cadastro de usuário
E informar um nome de usuário válido
E informar um e-mail válido
E informar a senha
E informar uma senha diferente na confirmação de senha
E clicar no botão "registre-se"
Então a mensagem informando que as senhas não são correspondentes é exibida e o cadastro não é efetuado

#Cenário: criar um avatar com sucesso

Teste 1
Dado que cliquei no botão "Comece já" da home
E estou na tela de criação de avatar
Quando eu selecionar todas as características do avatar
E clicar no botão "finalizar"
Então o avatar é criado com sucesso


#Cenário: adicionar uma tarefa diária com sucesso

Teste 1
Dado que estou na tela de tarefas 
Quando eu clicar no botão "adicionar tarefa"
E informar as configurações da tarefa
E clicar no botão "criar"
Então a mensagem informando que a tarefa foi criada com sucesso é exibida