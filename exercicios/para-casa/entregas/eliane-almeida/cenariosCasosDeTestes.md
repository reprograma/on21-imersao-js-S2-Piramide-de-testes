## - Exercício 2 - Cenários e casos de teste: 

Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest.

- Exercício 2 - Cenários e casos de teste:
Escreva os cenários de teste para o [habitica](https://habitica.com/static/home), considere pelo menos duas funcionalidades descritas no [Step 1 da Wiki do Habitica](https://habitica.fandom.com/wiki/Habitica_Wiki). Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade.

## Cénario caminho feliz de inserção de Nova Tarefa

### - Dado 

- Usuario estaja logado
- Adiciona uma nova tarefa

### - Então

- Salva a nova tarefa no banco
- Retorna mensagem de sucesso - 
{
    Tarefa adicionada com sucesso
}

## Cénario caminho infeliz de inserção de Nova Tarefa caso a tarefa já exista

### - Dado 

- Usuario estaja logado
- Adiciona uma nova tarefa existeste

### - Então

- Retorna mensagem de erro -
{
    Tarefa já cadastrada
}

## Cénario caminho feliz de edição de nova tarefa

### - Dado 

- Salva a nova informação no banco de dados
- Usuario estaja logado
- Edite uma nova tarefa existeste
- configure a diaria da tarefa

### - Então

- Salva a nova informação no banco de dados
- Retorna a mensagem de sucesso -
{
    ERROR - Edição da tarefa XXX com sucesso
}

## Cénario caminho infeliz de edição de nova tarefa

### - Dado 

- Usuario estaja logado
- Edite uma nova tarefa existeste
- configure a diaria da tarefa
- Já exista uma atividade cadastrada na diaria

### - Então

- Retorna a mensagem de erro -
{
    Erro ao editar a tarefa XXX pois já existe um cadastro de outra atividade na diaria
}

## Cénario caminho feliz da configuração de hábitos

### - Dado 

- Usuario estaja logado
- Adiciona um novo hábito
- Configure o seu hábito como bom ou ruim

### - Então

- Salva a nova informação no banco de dados
- Retorna a mensagem de sucesso -
{
    Habito cadastrado com sucesso
}

## Cénario caminho infeliz da configuração de hábitos

### - Dado 

- Usuario estaja logado
- Adiciona um novo hábito
- Este hábito já exista nos registros

### - Então

- Retorna a mensagem de erro -
{
    ERROR - Habito já cadastrado
}

## Cénario caminho feliz da configuração de recompensas

### - Dado 

- Usuario estaja logado
- Adiciona uma nova recompensa
- Coloque a condição para recebimentop da recompensa

### - Então

- Salva a nova recompensa no banco de dados
- Retorna a mensagem de sucesso -
{
    Reconpensa cadastrado com sucesso
}

## Cénario caminho infeliz da configuração de reconpensas

### - Dado 

- Usuario estaja logado
- Adiciona uma nova recompensa
- Coloque a condição para recebimento da recompensa
- Reconpensa já exista ou
- A condição para recebimento da recompensa esta associada a outra reconpença

### - Então

- Retorna a mensagem de erro -
{
    ERROR - Reconpensa já cadastrado
}
