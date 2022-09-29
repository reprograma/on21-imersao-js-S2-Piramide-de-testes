Simular exercicio 2 para casa

Google docs

1. criar
2. editar
3. compartilhar

PERGUNTAS PARA CENÁRIO DE TESTE

Dado um cenário
Quando tal coisa acontecer
Então faça outra coisa

por exemplo: Dado pagina login, quando inserir usuário e senha, faça login


Acessar on-line docs  (como você faz isso)
    visitar google drive
    logi
    clicar no botão

Simular cenários acessando a pagina.

PRIMEIRO CENÁRIO 

* Dado que acesso o Google Drive e não estou logada
* Quando aparecer a tela de login
* Digite os dados para login E clica em proximo

SEGUNDO CENÁRIO
* Verificação em duas etapas
* Enviar codigo para usuário
* Receber chamada ok
* Carregar pagina principal com arquivos do usuário

TERCEIRO CENÁRIO

* Dado que acesso o Google Drive e não estou logada
* Quando aparecer a tela de login
* E usuário entrar com senha invalida
* Então usuário é solicitado digitar senha correta OU esqueceu senha

QUARTO CENÁRIO
Dado senha Invalida
* Digitar senha correta
* Esqueceu senha





- Exercício 2 - Cenários e casos de teste:
Escreva os cenários de teste para o [habitica](https://habitica.com/static/home), considere pelo menos duas funcionalidades descritas no [Step 1 da Wiki do Habitica](https://habitica.fandom.com/wiki/Habitica_Wiki). Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade.

Segue tradução do Step 1 que está na Wiki:

```Etapa 1: inserir tarefas
Primeiro, insira algumas tarefas. Você pode adicionar mais mais tarde à medida que pensa neles.

1a. Configurar tarefas
Insira as tarefas que você faz uma vez ou raramente na coluna de tarefas, uma de cada vez. Você pode clicar no lápis para editá-los e adicionar listas de verificação, datas de vencimento e muito mais!
1b. Configurar Diárias
Insira as atividades que você precisa fazer diariamente ou em um determinado dia da semana na coluna Diárias. Clique no ícone de lápis do item para 'editar' o(s) dia(s) da semana em que será devido. Você também pode vencê-lo repetidamente, por exemplo, a cada 3 dias.
1c. Crie hábitos
Insira os hábitos que deseja estabelecer na coluna Hábitos. Você pode editar o Hábito para mudá-lo para apenas um bom hábito (+) ou um mau hábito (-).
1d. Configurar recompensas
Além das recompensas oferecidas no jogo, adicione atividades ou guloseimas que você deseja usar como motivação na coluna Recompensas. É importante dar uma pausa ou permitir alguma indulgência com moderação!
Bônus: se você precisar de inspiração sobre quais tarefas adicionar, consulte as páginas de hábitos de amostra, diárias de amostra, tarefas de amostra e recompensas de amostra.
```
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Criei minha branch (` git checkout -b nome-sobrenome `)
- [ ] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [ ] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).