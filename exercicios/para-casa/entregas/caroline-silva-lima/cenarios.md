Exercício 2 - Cenários e casos de teste:
Escreva os cenários de teste para o [habitica](https://habitica.com/static/home), considere pelo menos duas funcionalidades descritas no [Step 1 da Wiki do Habitica](https://habitica.fandom.com/wiki/Habitica_Wiki). Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade.


Cenario 1: Login
1.a) O botão login, localizado na página inicial, ao ser **clicado** deve **direcionar o cliente para a página "https://habitica.com/login"**.  

1.b) Na página https://habitica.com/login o cliente, para realizar o login, deve **inserir E-mail ou nome de usuário (diferencia minúsculas de maiúsculas)** e **senha** ou optar por iniciar entrar com conta Google ou conta Apple. 

1.b.1) Caso o cliente  tenha **enviado e-mail ou nome de usuário e/ou senha incorretos**, o **login não será realizado** e deverá abrir uma tela pop-up temporária com mensagem de login ou senha incorretos, orientando o cliente a conferir os dados ou, notando que esqueceu a senha, clicar no ícone "Esqueceu a senha?". 

1.b.2) Caso os dados inseridos pelo cliente para login estejam corretos, ao **clicar no botão login** o cliente **deverá ser direcionado para a página "https://habitica.com/**