## Cenários/Casos de Teste - Habitica

#### Cenários:
1. Cadastrar usuário
2. Adicionar novo hábito
3. Editar um hábito
4. Criar checklist como tarefa


#### Casos de Teste

1. Cadastrar usuário
   - Tela inicial clicar em *register*
   - Redirecionar tela de cadastro
   - Inserir username 
   - Inserir email
   - Inserir senha e confirmação
   - Clicar em *register*
   - Verificar se email e username não existem na base de dados
   - Criado novo usuário, redirecionar para tela de login


2. Adicionar novo hábito
    - A partir da home, clicar no "+" para cadastrar novo hábito
    - Inserir título
    - Inserir descrição
    - Selecionar opções *positive* ou *negative*
    - Selecionar *difficulty: trivial, easy, medium, hard*
    - Selecionar *reset counter*: *daily, weekly, monthly*
    - Clicar em *create*

3. Editar um hábito
    - Clicar no hábito que deseja editar
    - Redirecionar para configurações do hábito clicado
    - Alterar valor do contador para 10
    - Clicar em *save*
    - Redirecionar para página de lista de hábitos

4. Criar checklist como tarefa
     - A partir da aba de *Rewards*, clicar no "+"
     - Adicionar título
     - Adicionar itens no checklist
     - Selecionar dificuldade
     - Selecionar data de vencimento
     - Clicar em *create*
     - Redirecionar para lista de tarefas

