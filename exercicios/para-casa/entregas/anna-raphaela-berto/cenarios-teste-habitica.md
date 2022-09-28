_Criando cenários de teste para Habitica_

O step 1 envolve as funcionalidades de criação de tarefas, e para cada funcionalidade teremos alguns cenários/casos de testes mais importantes.


Casos gerais de teste:
- Testar validação de acesso;
- Testar o botao de login;
- Verificar as funcionalidades de acesso do usuário tem acesso as funcionalidades.

1a. Configurar tarefas
De acordo com as indicacaoes do aplicativo, é importantes testar e verificar que:
- Verificar a tarefa que foi selecionada para configuracão;
- Verificar se a data de vencimento da tarefa é anterior a data de criação;
- Teste de edição, verificando se os dados novos estao substituindo os antigos;
- Verificar se existe uma outra tarefa com o mesmo nome e data;
- Verificar se há alguma tarefa para a mesma semana com o mesmo nome, de acordo com o app, as tarefas serão feitas apenas uma vez, não podem ser realizadas todos os dias;

  1b. Configurar Diárias
- Deve permimtir a inclusao de nova tarefa 
- Verificar se o evento deverá ter uma repetição semanal ou diária;
- Deve testar/permitir edição, verificando se os dados novos estao substituindo os antigos ;
- Deve testar/permitir exclusão.

1c. Crie hábitos
- Deve criar um hábito desejado
- Testar qual dos dois tipos de hábitos selecionados, habito bom ou ruim;
- Testar que não há limite de criação;
- Deve testar/permitir edição;
- Deve testar/permitir exclusão;
- Hábitos positivos são atribuídos pontos de experiencia ourou ou pontos de mana de acordo com seus atributos e nível de dificuldade;
- Hábitos negativos serão subtraídos pontos, de acordo com seus atributos e nível de dificuldade;

1d. Configurar recompensas
- Validar que a cada conclusão de tarefas diárias ou afazeres serão atribuídos pontos ouro;
- Testar os casos que o ponto dado será um recompensa interna;
- Testar os casos que o ponto dado será um recompensas pessoais;
- Limitar a 50 pontos diárias de recompensas;
- Testar a implementação a uma nova motivação;
