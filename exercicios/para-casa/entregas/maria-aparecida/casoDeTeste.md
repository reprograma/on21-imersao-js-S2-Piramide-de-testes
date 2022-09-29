< Habitica >

Funcionalidade: Login

Contexto: Dado < que o usuário tenha conta no site>

Cenário: < Login válido >

Quando < o usuário visitar o site https://habitica.com/static/home >
E < Clicar no botão login >
E < Digitar o e-mail cadastrado no campo e-mail >
E < Digitar a senha cadastrada no campo senha >
E < Clicar no botão login >
Então < Deverá ser direcionado para a página inicial de usuário logado >

Cenário: < Login com senha incorreta>

Quando < o usuário visitar o site https://habitica.com/static/home >
E < Clicar no botão login >
E < Digitar o e-mail cadastrado no campo e-mail >
E < Digitar a senha incorreta no campo senha >
E < Clicar no botão login >
Então < Uma mensagem de aviso de senha incorreta deverá ser exibida na tela do usuário >

-----------------------------------------------------------------------------------------------------

Funcionalidade: Adicionar Tarefas - Diárias

Contexto: Dado < que o usuário esteja logado>

Cenário: < Mostrar modal criar diária >

Quando < o usuário estiver logado E na página https://habitica.com/ >
E < Clicar no botão adicionar tarefa >
E < Clicar na opção diária >
Então < Deverá ser apresentado um modal criar diária>

Cenário: < Criar diária >

Quando < O usuário estiver com o modal criar diária aberto >
E < Adicionar um título para a tarefa diária >
E < Preencher OU não os demais campos opcionais >
E < Clicar no botão criar >
Então < A tarefa diária deverá criada >

------------------------------------------------------------------------------------------------------

Funcionalidade: Adicionar Tarefas - Hábitos

Contexto: Dado < que o usuário esteja logado>

Cenário: < Mostrar modal criar hábito >

Quando < o usuário estiver logado E na página https://habitica.com/ >
E < Clicar no botão adicionar tarefa >
E < clicar na opção hábito >
Então < Deverá ser apresentada um modal criar hábito>

Cenário: < Criar hábito >

Quando < O usuário estiver com o modal criar hábito aberto>
E < adicionar um título para a tarefa hábito >
E < preencher OU não os demais campos opcionais >
E < clicar no botão criar >
Então < a tarefa hábito deverá ser criada>
