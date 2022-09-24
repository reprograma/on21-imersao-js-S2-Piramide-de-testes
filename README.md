<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Pirâmide de Testes

Turma Online 21 - Imersão JavaScript | Semana 2 | 2022 | Professora Letícia Luzia

### O que veremos na aula de hoje
  - [Testes de Integração](#testes-de-integração)
    - [O que são e para que servem ](#o-que-são-testes-de-integração-e-para-que-servem)
    - [Benefícios](#benefícios-dos-testes-de-integração)
    - [Abordagens](#abordagens)
    - [Implementação](#implementação-dos-testes-de-integração) 
  
  - [Testes End-to-End](#testes-end-to-end)
    - [O que são e para que servem](#o-que-são-testes-e2e-e-para-que-servem)
    - [Vantagens e desvantagens](#vantagens-e-desvantagens-dos-testes-e2e)
    - [Implementação](#implementação-de-testes-e2e)

  - [Estruturas de Testes](#estruturas-de-testes)
    - [O que são e para que serve](#o-que-são-estruturas-de-testes-e-para-que-servem)
    - [Formatos](#formatos)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

### Combinados
* Quando falar, levante a mão no Zoom
* Mantenha seu microfone desligado quando não estiver interagindo
* Se possível, mantenha a câmera ligada para nos conhecermos :)

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
------
## Testes de Integração  
  #### O que são testes de integração e para que servem
  **Conceito**

Teste de integração tem objetivo de validar módulos/componentes quando integrados para verificar se eles funcionam conforme o esperado, ou seja, testar se os módulos que estão funcionando bem individualmente não apresentam problemas quando integrados. A principal função ou objetivo deste teste é testar as interfaces entre as unidades/módulos.

**Motivação**

Testes de integração verificam a integração de múltiplos componentes do software, reduzindo o risco de falha. Além disso, o funcionamento (esperado) de API's ou dependências de terceiros pode ser validadado. Em geral, o teste de integração complementa o teste unitário, por olhar para uma porção mais ampla do sistema e suas comunicações externas.

  #### Benefícios dos testes de integração
  - Garante a adequação dos módulos e dos resultados de suas operações;
  - Detecta problemas de comunicação entre módulos;
  - Fornece uma cobertura de teste mais ampla em comparação com testes unitários.

  #### Abordagens
  Na abordagem incremental, os testes são feitos por etapas nas classes. As classes são testadas uma por uma, entre si, facilitando encontrar possíveis erros isoladamente.

  **Teste de cima para baixo (Top-Down)**: 

![Top-Down](/assets/top-down.png)

Nessa abordagem, os módulos individuais são combinados a partir do nível superior da hierarquia, o teste começa combinando os módulos em níveis superiores, movendo-se para baixo, para os módulos de nível inferior. Às vezes, os módulos de nível inferior não estão disponíveis, para conseguir realizar o teste são criados _stubs_, um trecho de código ou programa que aceita as entradas do módulo superior e retorna os resultados esperados. A grande vantagem é poder testar logo no início as funções principais do software.

Vantagens:
* Abordagem incremental, localização de fontes de falhas facilitada;
* Possibilidade de testar protótipos iniciais;
* Módulos críticos são priorizados, e por isso falhas de design podem ser encontradas e resolvidas.

Desvantagens:
* Stubs requerem conhecimento de programação e tempo para desenvolvimento;
* Módulos em um nível inferior são testados inadequadamente.

**Teste de baixo para cima (Bottom-Up)**: 

![Bottom-Up](/assets/bottom-up.png)

Nele, integra-se componentes de infraestrutura e depois adiciona-se componentes funcionais, o teste começa combinando os módulos de nível inferior, movendo-se para cima, para os módulos de nível superior. Quando os módulos de nível superior não estão disponíveis para teste, são criados _drivers_ - um trecho de código ou programa que age como um módulo superior chamando o módulo inferior a ser testado.

Vantagens:
* Abordagem incremental, localização de fontes de falhas facilitada;
* Não há perda de tempo esperando que todos os módulos sejam desenvolvidos;
* Fácil de criar condições de teste

Desvantagens:
* Drivers requerem conhecimento de programação e tempo para desenvolvimento;
* Módulos críticos (no nível superior da arquitetura de software) que controlam o fluxo de aplicativos são testados por último e podem estar propensos a defeitos;
* Um protótipo inicial não é possível.

**Teste Híbrido ou Sanduíche**: 

![Sandwich](/assets/hibrido.png)

A abordagem de teste de integração híbrida ou sanduíche combina as metodologias Top-Down e Bottom-Up. A integração dos módulos começa na camada intermediária, em seguida, o teste se move para cima e para baixo de maneira concorrente, garantindo um teste mais rápido das interfaces do módulo. Quando necessário, é possível utilizar tanto _stubs_ quanto _drivers_.

Vantagens:
* Como seus pais, é uma abordagem incremental, e portanto, pode ser iniciada com poucos módulos;
* Combina os benefícios das abordagens de cima para baixo e de baixo para cima
* Adequado para grandes projetos

Desvantagens:
* Envolve alto custo de teste, pois são necessários mais recursos;
* Devido ao uso do módulo fictício (_stubs_ e _drivers_), o teste pode ser ineficaz.

**Teste Big Bang**: 

![Big Bang](/assets/big-bang.png)

Essa abordagem de teste de integração é começar o teste quando todos os módulos forem desenvolvidos. Todas as unidades são testadas juntas como uma única unidade combinada. Essa forma de teste de integração funciona bem para sistemas menores, quanto maiores os sitemas mais difícil encontrar a fonte do erro.

Vantagens:
* Fácil de implementar;
* Testa o sistema inteiramente.

Desvantagens:
* Difícil encontrar a causa raiz de um defeito;
* Todas as interfaces são testadas ao mesmo tempo, o que requer mais esforço e tempo;
* Módulos críticos não são priorizados, o que poderia aumentar o risco geral;
* Atraso, todos os módulos devem estar prontos.
#### Implementação dos testes de integração
Melhores práticas:
* Identifique unidades críticas que devem ser priorizadas;
* Utilize logs com abundância;
* Mantenha seus testes unitários separados dos testes de integração;
* Não teste lógica de negócio em testes de integração;
* Se possível utilize CI/CD, para rodar seus testes antes do deploy.

## Testes End-to-End
#### O que são testes E2E e para que servem
  O teste de ponta a ponta é o processo de testar um software do início ao fim, a ideia é rodar a aplicação com todas as suas dependências: banco de dados, serviços externos, métricas, logging, etc. Isso ainda pode ser em um ambiente de teste, separado do ambiente de produção. Mas, idealmente, esse ambiente de teste representa o ambiente de produção o mais próximo possível.

#### Motivação
Mesmo que seu sistema esteja coberto por testes unitário e de integração podem haver requisitos não atendidos. Por exemplo, se seu software tem uma interface de usuário, os testes unitários e de integração não conseguem validar se a experiência do usuário é boa, se todos os elementos necessários existem. Para isso é necessário utilizar testes E2E. Outro cenário em que testes E2E podem ser aplicado é em quando existem serviços (ou microsserviços) espalhados em diversos servidores, é importante garantir que tudo funcione como esperado.

   #### Vantagens e desvantagens dos testes E2E
   Vantagens:
* Testes da perspectiva de um usuário: testes de ponta a ponta examinam o aplicativo da perspectiva de um usuário final. Isso pode descobrir defeitos que não são aparentes no teste de unidade;
* Verifica fluxos de trabalho: testes E2E podem validar a lógica de negócios de uma aplicação;
* Expande a cobertura de teste: os testes E2E podem verificar se todas as dependências de um aplicativo funcionam corretamente em conjunto, incluindo código de terceiros;
* Reduz o número de erros encontrados na produção: adicionar testes E2E a um conjunto de testes pode ajudar a reduzir a chance de encontrar defeitos após a implantação na produção.

Desvantagens:
* Execução lenta: testes que verificam fluxos de trabalho por meio da interface do usuário podem levar muito tempo para serem executados;
* Testes frágeis: os testes E2E podem exigir manutenção e resolução de problemas significativos;
* Falta de ambiente de teste disponível: recriar um ambiente de teste para um cenário do mundo real pode ser difícil;
* Mais difícil de depurar: quando um teste E2E falha, mais pesquisas podem ser necessárias para encontrar e corrigir o problema do que com uma unidade mais granular ou teste de integração.

   #### Implementação de testes E2E
   Bons testes E2E seguem estas sete etapas:
1. Definição de cenários de teste;
2. Desenvolvimento de um ambiente de teste alinhado com os cenários;
3. Análise dos requisitos de software e hardware;
4. Definição de como os sistemas precisam responder;
5. Definição de métodos de teste;
6. Escrever casos de teste;
7. Execução e análise.

| Cenário de teste | Casos de teste |
| -------------- | ---------------- |
| Cenário de teste é um conceito | Os casos de teste são as soluções para verificar esse conceito |
| O cenário de teste é uma funcionalidade de alto nível | Os casos de teste são procedimentos detalhados para testar a funcionalidade de alto nível |
| Os cenários de teste são derivados de Requisitos de Usuário | Os casos de teste são derivados de cenários de teste |
| O cenário de teste responde a "Qual funcionalidade deve ser testada?" | Os casos de teste respondem a "Como testar a funcionalidade?" |
| Cenários de teste têm vários casos de teste | Um caso de teste pode ou não estar associado a vários cenários de teste |
| Um cenário de teste nunca é repetível | Caso de teste único pode ser usado várias vezes em diferentes cenários |
| Necessária apenas documentação simples | É necessária documentação detalhada |
| Sessões de brainstorming são necessárias para finalizar um cenário de teste | É necessário conhecimento técnico detalhado do aplicativo de software |
| O custo de manutenção é baixo, pois os recursos necessários são baixos | O custo de manutenção é alto, pois os recursos necessários são altos |

## Estruturas de Testes
   #### O que são Estruturas de Testes e para que servem
   Estruturas de Testes, Formatos de Testes, ou _Shapes of Testing_ são formas gráficas de demonstrar tipos, tamanho, velocidade de implementação e complexidade dos testes realizados em um sistema. Através desss formato é possível determinar o custo de implementar e manter cada nível de teste, além de fornecer informaçãoes de qual nível deve ser testado primeiro e por quê.

   #### Formatos
   **Pirâmide**

![Pirâmide de Testes](/assets/piramide.png)

A pirâmide de testes original de Mike Cohn consiste em três camadas que seu conjunto de testes deve ter:
1. Testes de Interface de Usuário, ou em alguns casos, Testes E2E
2. Testes de Integração
3. Testes Unitários

Devido à sua simplicidade, a essência da pirâmide serve como uma boa regra geral quando se trata de estabelecer seu próprio conjunto de testes. O princípios básicos dessa estrutura são:
* Escreva testes com granularidade diferente
* Quanto mais alto o nível, menos testes você deve ter

**Cone de Sorvete e Cupcake**

![Cone de Sorvete](/assets/sorvete.png)

Possui 4 camadas:
1. Testes Manuais
2. Testes de Interface de Usuário Automatizados
3. Testes de Integração
4. Testes Unitários

Princípios básicos dessa estrutura:
* Quanto mais baixo o nível, menos testes você deve ter
* Deixe grande parte do trabalho para o QA

(Muito ruim, quanto mais o software cresce mais impossível se torna testá-lo)

![Cupcake](/assets/cupcake.png)

O cupcake é similar ao Cone de Sorvete com a diferença de ter Testes de Integração e Unitários no mesmo nível. Em algumas imagens da internet ele é idêntico ao Cone.

**Troféu**

![Troféu](/assets/trofeu.png)

Criada a partir da frase de Guillermo Rauch (criados do Soket.io) "Escreva testes. Não muitos. Na maior parte, de integração". Esse formato possui 4 camadas:
1. Testes E2E
2. Testes de Integração
3. Testes Unitários
4. Testes Estáticos

A motivação dessa estrutura é focar no ponto em que o melhor retorno de tempo gasto escrevendo testes é obtido. Esse ponto reside nos testes de integração, pois você precisa de menos deles para detectar problemas reais, além de serem rápidos o suficiente para escrevê uma quantidade razoável deles. Esse modelo também valoriza testes estáticos, pois são baratos no que tange tempo e custo, dentro desse tipo de teste encontramos _linters_, verificadores de tipo, que não podem simplesmente ser ignorados num projeto. Apesar desse tipo de teste não detectar bugs, ele ajuda a manter boas práticas sem muito esforço humano.


***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)
* [Exercicio para casa](/exercicios/para-casa/)

### Links Úteis
* [O QUE É TESTE DE INTEGRAÇÃO E QUAIS SÃO OS TIPOS DE TESTE?](https://kenzie.com.br/blog/teste-de-integracao/)
* [Test Case vs Test Scenario: What’s the Difference?](https://www.guru99.com/test-case-vs-test-scenario.html)
* [What is Test Scenario? Template with Examples](https://www.guru99.com/test-scenario.html)
* [What Is Test Scenario: Test Scenario Template With Examples](https://www.softwaretestinghelp.com/what-is-test-scenario/#Test_Scenario_Examples)
* [Pirâmide de Testes — Definindo uma boa suíte de testes para seu Software](https://medium.com/luizalabs/pir%C3%A2mide-de-testes-definindo-uma-boa-su%C3%ADte-de-testes-para-seu-software-a6864886f29b)
* [O QUE É A PIRÂMIDE DE TESTES?](https://blog.onedaytesting.com.br/piramide-de-teses/)

### Contato
- [E-mail](mailto:leticialuzia89@gmail.com)
- [Linkedin](https://www.linkedin.com/in/leticialuzia/)

<p align="center">
Desenvolvido com :purple_heart:  
</p>

