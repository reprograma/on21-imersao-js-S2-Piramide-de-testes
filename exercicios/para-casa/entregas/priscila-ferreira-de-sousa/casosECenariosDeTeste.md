## Exercício 2
#### Cenários e casos de teste: Escreva os cenários de teste para o habitica, considere pelo menos duas funcionalidades descritas no Step 1 da Wiki do Habitica. Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade.


* <b>Cenário de teste: Checar a configuração de tarefas</b>
    * Caso de teste 1: Verificar se ao cadastrar uma nova tarefa a mesma está sendo persistida;
    * Caso de teste 2: Verificar se ao ultrapassar a data de vencimento da tarefa, sua cor muda para vermelho;
    * Caso de teste 3: Verificar se ao editar uma tarefa, os dados estão sendo atualizados;
    * Caso de teste 4: Verificar se ao concluir uma tarefa, a cor do To Do é alterada para cinza;
    *Caso de teste 5: Ao excluir as tarefas, verificar se apenas tarefas concluídas foram excluídas;
    
    
* <b>Cenário de teste: Checar a configuração de diárias</b>
    * Caso de teste 1: Verificar se ao marcar uma diária sua cor muda para cinza e o jogador ganha pontos;
    * Caso de teste 2: Verificar se ao desmarcar uma diária ela retorna para a cor normal, diminui em 1 o contador de sequência e retira pontos de experiência do jogador;
    * Caso de teste 3:Verificar se o jogador está perdendo pontos quando desmarca uma diária após meia noite;