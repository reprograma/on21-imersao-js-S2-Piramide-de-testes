# Cenários e casos de teste - Habitica Api

## 1 Configurar Diárias
Pŕe-condição: Estar devidamente logado no site. 


### - Adicionar Diária 
* Dado que: O usuário esteja logado e deseja inserir uma diária
* Quando: Ao clicar na caixa cinza "Adicionar diária"
* Então: Deve-se permitir a inserção do Título e o armazenamento da diária após ação de confirmação através do botão Enter. Ao salvar, a nova diária ganhará prioridade, permanecendo no topo da lista de diárias atuais. 


### - Editar Diária
* Dado que: O usuário esteja logado e deseja editar uma diária
* Quando: Ao clicar no espaço em branco ao lado do título OU no título da diária
* Então: Habilitar o campo de texto para edição. Após inseridas as modificações, deve-se salvá-las como resultado do clique no botão "Salvar" OU "Enter".
* Detalhamento: É possível editar além do conteúdo, o grau de dificuldade em realizar aquela diária. Para tanto, exibir as opções "trivial", "easy" "medium" ou "hard" no campo de dificuldade e armazenar o nível selecionado pelo usuário. Cada nível fornece mais ou menos ouro na conclusão da atividade. Durante a edição ainda, permitir definição de intervalo de repetição a ser definido pelo usuário através de menu drop-down com o rótulo Repetições.



### - Adicionar múltiplas Diárias
* Dado que: o usuário esteja logado e deseja inserir múltiplas diárias 
* Quando: A tela de inserção estiver em exibição 
* Então: Possibilitar a inserção de várias diárias, por meio da tecla SHIFT pressionada em conjunto com a tecla Enter, permitindo listagem das que se deseja adicionar.
* Detalhamento: Se pressionada somente a Enter, todas serão adicionadas simultaneamente. 



### - Realizar Diária
* Dado que: Usuário esteja logado e deseja concluir uma Diária
* Quando: Abrir determinada Diária
* Então: Deve-se exibir botão "+" no lado esquerdo do título e, uma vez clicado, sinalizar a conclusão e atribuir a recompensa adequada.



### - Adicionar lista de verificação de Diárias
* Dado que: Usuário esteja logado e deseja inserir uma lista
* Quando: Ao abrir a tela de criação de lista de verificação e selecionar determinada Diária em modo de edição
* Então: O primeiro item correspondente a diária será exibido. Para inserir novos, deve-se permitir que o usuário pressione a tecla Enter ou a tecla 'Tab', ação que deve resultar em quebra de linha e habilitação do campo para que se inclua o conteúdo do próximo item da lista. Ao finalizar, a lista deve ser armazenada com o clique no botão "Salvar".



### - Organizar Diárias
* Dado que: Usuário deseja organizar as Diárias
* Quando: Na tela de Diárias
* Então: Deve-se possibiltiar organização e alteração da sequência de Diárias. Usuário precisa clicar numa diária, arrastá-la para o ponto da lista desejado e soltá-la no lugar definido. 
* Detalhamento: No menu de 3 pontos no canto superior também é possivel empurrar para cima e para baixo a diária escolhida.



## 2 Configurar Recompensas
Pŕe-condição: Estar devidamente logado no site. Para receber a recompensa é necessário ter realizado alguma diária, tarefa ou hábito positivo.



### - Fixar item na Lista de Desejos  
* Dado que: Usuário deseja fixar um item na Lista de Desejos
* Quando: Selecionada a coluna "Recompensas"
* Então: Exibir na parte inferior da coluna a sessão "Lista de Desejos". A lista deve vir previamente preenchida com alguns itens automaticamente. Para fixar um item fora da lista, o usuário deve selecioná-lo na loja e clicar no ícone de "alfinete" no canto superior esquerdo da janela de visualização  do item. Quando clicado, o pin mudará para a cor roxa sinalizando que o mesmo foi fixado. Para desafixar o item, clicar no mesmo novamente, tornando-o branco outra vez.



### - Criar recompensa
* Dado que: O usuário deseja criar uma recompensa personalizada
* Quando: Exibida a sessão "Recompensas"
* Então: Deve-se exibir botão na cor verde com sinal de "+" que abrirá menu com a opção "Recompensa". Uma vez clicada a opção, exibir modal com campos para inserção de título que deve ser salvo por meio de clique na tecla Enter. 
* Detalhamento: O custo mínimo é de 10 moedas de ouro e permite alteração para valores maiores.



### - Editar custo da recompensa
* Dado que: O usuário deseja editar o custo de uma recompensa personalizada
* Quando: Exibida a sessão "Recompensas"
* Então: Permitir edição após clique do usuário no título da recompensa ou no ícone de "lápis" para adentrar o modo de edição. A alteração no valor  poderá ser realizada para mais ou para menos. O campo permite números decimais.



### - Visualizar recompensas 
* Dado que: O usuário deseja visualizar suas recompensas
* Quando: Exibida a sessão "Recompensas"
* Então: Deve-se exibir menu com opções de visualizações distintas.Para visualizar somente as recompensas personalizadas, deve-se acessar a sessão Recompensas e selecionar a guia "Personalizada". Para ocultar as personalizadas, deve-se clicar em "Lista de Desejos" e por fim, para visualizar todas as recompensas disponíveis, deve-se clicar em "Todas".



### - Excluir recompensas
* Dado que: O usuário deseja remover uma recompensa
* Quando: Selecionada uma recompensa
* Então: Exibir ícone de "Lixeira" que, uma vez clicado, deverá resultar em exclusão da recompensa em questão.



### - Atualizar atributos do personagem
* Dado que: O usuário deseja atualizar os atributos de seu avatar com os pontos adquiridos nas conclusões das atividades
* Quando: A tela de "Atributos" estiver selecionada E o usuário estiver a partir do nível 10
* Então: Deve-se permitir a distribuição manual dos pontos entre as habilidades listadas de acordo com a preferência do usuário. Para tanto, ao lado da pontuação de cada competência, deve constar setas para cima e para baixo que, ao serem clicadas, devem alterar os valores de acordo com o que foi selecionado.

