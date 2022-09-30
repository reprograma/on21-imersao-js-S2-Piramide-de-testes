1. criar
2. editar
3. compartilhar

- acessar on-line docs
visitar google drive
login
clicar no botão

Dado um cenário 
Quando tal coisa acontecer
Então faça outra coisa

Dado que eu acesso drive.google.com E não estou logado
Quando aparecer a tela de login 
Digite os dados para login E clique em próxima

Dado que eu acesso drive.google.com E não estou logado
Quando aparecer a tela de login 
E o usuário entrar com senha inválida
Então o usuário é solicitado a digitar a senha correta

Cenário senha inválida
- digitar senha correta
- esqueceu senha

---------------------------------------------------------------

1. Resetar a senha 
* Dado que: o usuário necessita trocar de senha em decorrência de esquecimento da mesma
* Quando: Estiver sendo exibida a tela de login
* Então: Deve-se solicitar confirmação de identidade do usuário por meio de código enviado por email ou via SMS para o celular, uma vez que se clica no botão "Esqueceu sua senha?", disposto na parte de baixo do quadro para escolha da conta.

2. Logar utilizando a tecla "Enter"
* Dado que: Usuário deseja efetuar login 
* Quando: Acessar a tela inicial de login 
* Então: Deve-se permitir o login do usuário, liberando o acesso através da tecla Enter pressionada desde que as credenciais do email e senha sejam válidas. 

3. Personalização de visualização de documentos 
* Dado que: Usuário está logado e deseja acessar seus documentos
* Quando: Na tela inicial após efetuado o login
* Então: Deve-se apresentar ícone no canto superior direito da tela, abaixo da engrenagem de configurações com tooltip descritivo "Layout de lista" ou "Layout de grade", a depender do modo ativado no momento da ação e que, ao ser clicado, altera a visualização de acordo com a preferência do usuário e a opção definida no ato da escolha.

4. Desfazer exclusão de arquivo
* Dado que: Usuário deseja desfazer a remoção de um arquivo
* Quando: Na tela de visualização dos documentos
* Então: Deve-se apresentar mensagem de aviso após a exclusão do item com o conteúdo "Arquivo movido para a lixeira" e um botão 'DESFAZER' que, ao selecionado, reverte a exclusão e armazena o arquivo novamente no drive.

5. Bloquer outro usuário impedindo-o de compartilhar arquivos com você
* Dado que: Usuário deseja bloquear alguém
* Quando: Em um email de compartilhamento do Drive
* Então: Deve-se possibilitar o bloqueio de outro usuário por meio do botão "Bloquear Remetente" na parte inferior do email. Esta ação deve apresentar uma nova guia por meio da qual seja possível selecionar a  conta em que se quer criar o bloqueio. Para concluir o processo é necessário clicar no botão "Bloquear".