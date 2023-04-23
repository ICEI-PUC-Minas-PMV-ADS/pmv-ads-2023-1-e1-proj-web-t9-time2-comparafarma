	
<li>
Especificação do Projeto
</li>
  	
Este projeto foi elaborado pela equipe de produção após a detecção da necessidade de alguns usuários. Posteriormente, a equipe realizou pesquisas e observação de pessoas, suas rotinas diárias e suas necessidades para visualização de como melhor atendê-los. Com isso, foram estabelecidas as personas, as histórias e os requisitos do projeto, conforme detalhado a seguir.
	
2.1. Personas
A seguir são apresentadas as personas importantes para o desenvolvimento desse projeto, criadoras de histórias que guiarão a construção das funcionalidades desse sistema.

- Persona 1: Luzia Silva
Idade: 60 anos
Profissão: Motorista de ônibus
Mulher que mora em uma cidade grande e trabalha como motorista de ônibus. Ela foi diagnosticada com diabetes tipo 2 há cinco anos.
Desafios: precisa fazer um controle rigoroso da glicemia para evitar complicações em sua saúde; precisa lidar com os altos preços dos medicamentos e a dificuldade de encontrá-los em estoque em algumas farmácias.
  
- Persona 2: Carolina Souza
Idade: 32 anos
Profissão: Professora
Mulher que mora em uma cidade litorânea. Ela trabalha como professora e é uma pessoa muito ativa. Carolina foi diagnosticada com asma com 12 anos de idade.
Desafios: precisa lidar com as crises de asma e evitar possíveis desencadeadores de suas crises, como poeira, ácaros e mudanças bruscas de temperatura; precisa encontrar rapidamente os medicamentos que precisa quando uma crise ocorre.
  
- Persona 3: José Silva
Idade: 27 anos
Profissão: Designer Gráfico
Homem que mora em uma cidade pequena. Ele trabalha como designer gráfico e gosta de passar seu tempo livre fazendo atividades criativas. José foi diagnosticado com depressão há alguns anos e desde então precisa lidar com os sintomas da doença.
Desafios: precisa lidar com os sintomas da depressão, como a falta de energia e a falta de motivação para realizar tarefas diárias; precisa encontrar os medicamentos que precisa para controlar os sintomas e evitar recaídas.
	
- Persona 4: Marcos Castro
Idade: 48 anos
Profissão: Empresário
Homem que mora em uma cidade grande e é proprietário de uma farmácia. Tem observado seus ganhos reduzirem nos últimos anos devido ao aumento de farmácias pertencentes a grandes redes. Gostaria de aumentar os lucros.
Desafios: precisa aumentar os lucros com pouco investimento; gostaria de vender para outros públicos que não somente os do entorno da Farmácia.

2.2. Histórias de usuários
				 
A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|Eu como ... (PERSONA)| ... quero/desejo ... (O QUE)| ... para ....  (POR QUE)|
|------|-----------------------------------------|----|
|Luzia Silva| encontrar uma plataforma de comparação de preços que apresente os valores dos medicamentos em diferentes farmácias da região.  | economizar tempo e dinheiro na compra dos remédios para controle da diabetes.  | 
|Luzia Silva | poder fazer buscas por nome do medicamento e receber informações detalhadas sobre as diferentes opções disponíveis nas farmácias próximas a minha casa.   | encontrar o melhor preço para os medicamentos que utilizo.  |
|Carolina Souza | desejo ter acesso às informações de contato das farmácias.  | poder entrar em contato e tirar dúvidas sobre a disponibilidade do produto.  |
|Carolina Souza | criar uma lista de favoritos com os medicamentos que utilizo com frequência.  | monitorar os preços e receber alertas quando houver promoções.  |
|José Silva  | poder compartilhar minhas buscas e resultados nas redes sociais.   | ajudar outras pessoas que estejam passando por situações semelhantes. |
|José Silva  | ter a opção de filtrar as buscas por região ou bairro.   | encontrar as farmácias mais próximas de mim. |
|Marcos Castro | fornecer acesso ao seu estoque e seus preços para clientes diferentes dos que ele já tem.   | conseguir novos clientes, aumentando sua renda.   |
|Marcos Castro  | ter dados sobre os medicamentos mais procurados em aplicativos de orçamento e o perfil dos clientes que procuram.   | trabalhar melhor suas estratégias de divulgação de acordo com os interesses dos clientes.   |

<!-- 
- Luzia Silva: desejo encontrar uma plataforma de comparação de preços que apresente os valores dos medicamentos em diferentes farmácias da região para economizar tempo e dinheiro na compra dos remédios para controle da diabetes. 
- Luzia Silva: desejo poder fazer buscas por nome do medicamento e receber informações detalhadas sobre as diferentes opções disponíveis nas farmácias próximas a minha casa para encontrar o melhor preço para os medicamentos que utilizo. 
- Carolina Souza: desejo ter acesso às informações de contato das farmácias para poder entrar em contato e tirar dúvidas sobre a disponibilidade do produto. 
- Carolina Souza: desejo criar uma lista de favoritos com os medicamentos que utilizo com frequência para monitorar os preços e receber alertas quando houver promoções. 
- José Silva: desejo poder compartilhar minhas buscas e resultados nas redes sociais para ajudar outras pessoas que estejam passando por situações semelhantes. 
- José Silva: desejo ter a opção de filtrar as buscas por região ou bairro para encontrar as farmácias mais próximas de mim. 
- Marcos Castro: desejo fornecer acesso ao seu estoque e seus preços para clientes diferentes dos que ele já tem para conseguir novos clientes, aumentando sua renda. 
- Marcos Castro: desejo ter dados sobre os medicamentos mais procurados em aplicativos de orçamento e o perfil dos clientes que procuram para trabalhar melhor suas estratégias de divulgação de acordo com os interesses dos clientes. 
	 -->
2.3. Requisitos do Projeto 
	
Constituem requisitos funcionais, que descrevem as possibilidades de interação dos usuários, e requisitos não funcionais, que descrevem os aspectos que o sistema deverá apresentar de maneira geral, elencados nesta seção. 

2.3.1 Requisitos Funcionais 
	
A seguir são apresentados os requisitos funcionais do projeto, indicando a prioridade em que devem ser entregues. 
	
|ID       | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve possuir uma página principal com informações que apresentem o aplicativo e permitam ao usuário buscar algum medicamento | ALTA | 
|RF-02| O site deve apresentar uma página com o resultado da pesquisa feita pelo usuário e comparação do preço do medicamento consultado em farmácias diferentes  | ALTA |
|RF-03| O site deve mostrar a localização e contato das farmácias  | MÉDIA |
|RF-04| O site deve permitir que o usuário faça uma lista de favoritos  | BAIXA |
|RF-05| O site deve permitir que o usuário compartilhe o resultado de sua pesquisa nas redes sociais  | BAIXA |
|RF-06| O site deve permitir que o usuário ative alertas de preço dos medicamentos e enviar um e-mail quando o preço for alcançado  | BAIXA |

<!-- - RF-01: Prioridade alta. O site deve possuir uma página principal com informações que apresentem o aplicativo e permitam ao usuário buscar algum medicamento. 
- RF-02: Prioridade alta. O site deve apresentar uma página com o resultado da pesquisa feita pelo usuário e comparação do preço do medicamento consultado em farmácias diferentes. 
- RF-03: Prioridade média. O site deve mostrar a localização e contato das farmácias. 
- RF-04: Prioridade baixa. O site deve permitir que o usuário faça uma lista de favoritos. 
- RF-05: Prioridade baixa. O site deve permitir que o usuário compartilhe o resultado de sua pesquisa nas redes sociais. 
- RF-06: Prioridade baixa. O site deve permitir que o usuário ative alertas de preço dos medicamentos e enviar um e-mail quando o preço for alcançado.  -->
	
2.3.2 Requisitos Não Funcionais 
	
O projeto deverá atender também os requisitos não funcionais, descritos a seguir. 
	
|ID      | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RNF-01| O site deve ser desenvolvido utilizando-se a plataforma de hospedagem e controle de versão de código GitHub | ALTA | 
|RNF-02| O site deve ser responsivo permitindo a visualização em um celular de forma adequada  | ALTA |
|RNF-03| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)   | ALTA |
|RNF-04| O site deve ter bom nível de contraste entre os elementos da tela  | MÉDIA |
<!-- 
- RNF-01: Prioridade alta. O site deve ser desenvolvido utilizando-se a plataforma de hospedagem e controle de versão de código GitHub. 
- RNF-02: Prioridade alta. O site deve ser responsivo permitindo a visualização em um celular de forma adequada. 
- RNF-03: Prioridade alta. O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) 
- RNF-04: Prioridade média. O site deve ter bom nível de contraste entre os elementos da tela. 
	 -->
2.3.3 Restrições 
	
Este projeto possui algumas limitações e deve respeitar parâmetros previamente estabelecidos, conforme descrito a seguir. 

|ID    | Descrição do Requisito  | 
|------|-----------------------------------------|
|RE-01| O projeto deve respeitar os prazos das etapas estabelecidos no cronograma da disciplina | 
|RE-02| A solução deve ser implementada em sua íntegra e apresentada até o dia 25/06/2023 |
|RE-03| O aplicativo não pode utilizar back-end |
|RE-04| A solução e o projeto devem ser desenvolvidos pela equipe do projeto |

<!-- 	
- RE-01: O projeto deve respeitar os prazos das etapas estabelecidos no cronograma da disciplina. 
- RE-02: A solução deve ser implementada em sua íntegra e apresentada até o dia 25/06/2023. 
- RE-03: O aplicativo não pode utilizar back-end. 
- RE-04: A solução e o projeto devem ser desenvolvidos pela equipe do projeto.   -->
	
<!-- <li><a href="docs/03-Metodologia.md"> Metodologia</a></li> -->
