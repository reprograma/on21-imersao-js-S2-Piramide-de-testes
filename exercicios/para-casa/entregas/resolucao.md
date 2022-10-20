# Exercício de Casa 🏠 

## Cenários/casos de teste

**Exercício 2 - Cenários e casos de teste:**
Escreva os cenários de teste para o [habitica](https://habitica.com/static/home), considere pelo menos duas funcionalidades descritas no [Step 1 da Wiki do Habitica](https://habitica.fandom.com/wiki/Habitica_Wiki). Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade.

**Adiciona Diária**
- Dado que estou logada na página inicial habitica.com
- Quando clico em *Adicionar Tarefa*
- Então vejo o menu com opções de tarefas
<br>
- Dado que estou com o menu de opções de tarefas aberto
- Quando clico em *Diária*
- Então vejo a tela *Criar Diária*
**Caminho Infeliz**
- Dado que estou na tela de *Criar Diária*
- Quando vou até o final da janela e clico em *Criar* sem definir um *Título*
- Então a tela *Criar Diária* permanece aberta
**Caminho Feliz**
- Dado que estou na tela de *Criar Diária*
- Quando digito um título
- Então o botão *Criar* fica ativo
- Dado que o botão *Criar* está ativo
- Quando clico no botão *Criar*
- Então a tela de *Criar Diária* se fecha e retorno para a página principal

**Deletar um Afazer**
- Dado que estou logada na página inicial habitica.com
- Quando clico em um dos cards na coluna *Afazeres*
- Então vejo a tela *Editar Afazer*
<br>
- Dado que estou na tela *Editar Afazer*
- Quando vou até ao final da janela e vejo o botão *Delete este(a) Afazer* ativo
- Quando clico em *Delete este(a) Afazer*
- Então recebo o alerta *"Você tem certeza que deseja deletar este(a) Afazer?"*
- Quando clico em *OK*
- Então a tela *Editar Afazer* se fecha e retorno para página pricipal
- Dado que estou na tela principal
- Então o Afazer deletado não deve mais aparecer na coluna de *Afazeres*