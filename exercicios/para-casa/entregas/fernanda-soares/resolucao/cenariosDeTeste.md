# Cenários de Teste

## 1. Checar funcionalidade de criar Diarias

- Criar diária com data de início válida.
  Expect: Diária deve ser adicionada a lista de diárias.

- Criar diária com data de início inválida.
  Expect: Diária não deve ser criada.

- Editar Etiquetas da diária.
  Expect: Etiqueta deve ser alterada.

- Checar diária.
  Expect: Diária deve aparecer como Inativa.

## 2. Checar funcionalidade de criar Hábitos

- Criar hábito com título válido.
  Expect: Hábito deve ser adicionado a lista de hábitos.

- Criar hábito com título inválido.
  Expect: Hábito não deve ser criado.

- Editar hábito de positivo para negativo.
  Expect: Hábito deve aparecer com a extremidade direita em laranja.

- Deletar hábito.
  Expect: Hábito deve ser removido da lista de hábitos.

## 3. Checar funcionalidade de criar Recompensas

- Criar recompensa personalizada com Custo negativo.
  Expect: Deve apresentar uma mensagem de erro.

- Criar recompensa personalizada com Custo 0.
  Expect: Custo deve ser alterado.
