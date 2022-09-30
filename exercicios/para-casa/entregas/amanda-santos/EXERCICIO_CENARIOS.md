<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Pirâmide de Testes

Turma Online 21 - Imersão JavaScript | Semana 2 | 2022 | Professora Letícia Luzia

Acessar o link da plataforma
1 - Dado que entro no site https://habitica.com/,
Quando acessa o link da plataforma
Então clico no botão de Login.

Preencher campos - Vazios (LOGIN)

2 - Dado que não preencho os campos
Quando clico no botao de login
Então vejo uma mensagem “Faltando nome de usuário ou email. Faltando senha”.

Preencher campos - inválidos

3 - Dado que preencho algum dos dois campos (inválidos)
Quando clico no botao de login
Então vejo uma mensagem “endereço de email ou senha incorretos...”.

Preencher campos válidos

4 - Dado que preencho os dois campos (válidos)
Quando clico no botao de login
Então consigo logar na página do hábitica

---

Cenário 2 - Adicionar hábitos

1 - Dado que estou dentro da plataforma habitica,
Quando clico na aba tarefas
Entao consigo visualizar a coluna de hábitos

2 - Dado que visualizo a coluna de hábitos
Quando clico em "Adicionar uma tarefa ao hábitica"
Então abrirá um modal para adicionar o hábito.

3 - Dado que consigo visualizar o modal para adicionar o hábito
Quando preencho os campos necessários e clico em salvar
Então o hábito deverá aparecer na coluna de hábitos.

Cenário 3 - Adicionando recompensa

1 - Dado que estou dentro da plataforma habitica,
Quando clico na aba tarefas
Entao consigo visualizar a coluna de recompensas

2 - Dado que visualizo a coluna de recompensas
Quando clico em "Se recompense"
Então abrirá um modal para adicionar uma recompensa.

3 - Dado que consigo visualizar o modal para adicionar o hábito
Quando preencho os campos necessários e clico em salvar
Então a recompensa deverá aparecer na coluna de recompensas.
