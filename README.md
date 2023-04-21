# COMPARARFRAMA

`TECNOLOGIA EM ANALISE E DESENVOLVIMENTO DE SISTEMAS`

`PROJETO: DESENVOLVIMENTO DE APLICAÇÃO WEB FRONT-END`

`1o SEMESTRE 2023`


## Integrantes

- Bruno Henrique Comassetto
- Christiane Curi Pereira
- Gabriel Mautone Costa
- Jonathan Francisco Rocha de Castro
- Murilo Henrique Souza Ignacio
- Priscila Amaral Diniz

## Orientador

- Marco Rodrigo Costa

## Instruções de utilização

Assim que a primeira versão do sistema estiver disponível, deverá complementar com as instruções de utilização. Descreva como instalar eventuais dependências e como executar a aplicação.

# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>

Em 2003, por meio da implementação da Lei 10.742, criou-se a Câmara de Regulação do Mercado de Medicamentos (CMED), que passou a estabelecer preços máximos ao consumidor (PMC) para medicamentos, assim como uma série de outros controles. Em termos da literatura econômica, isso significou adotar o modelo de preço-teto para regulação de preços nesse mercado.  O ajuste de preços de medicamentos se baseia em um modelo de teto de preços calculado com base: (1) em um índice - o Índice Nacional de Preços ao Consumidor Amplo (IPCA), que é calculado pelo Instituto Brasileiro de Geografia e Estatística (IBGE); (2) em um fator de produtividade - expresso em percentual e que permite repassar aos consumidores ganhos de produtividade das empresas produtoras de medicamentos; e (3) em um fator de ajuste de preços relativos intrassetor - calculado com base no poder de mercado, que é determinado pelo poder de monopólio ou oligopólio, na assimetria de informação, nas barreiras à entrada e outros, e entre setores - calculado com base na variação dos custos dos insumos, desde que tais custos não sejam recuperados pelo cômputo do índice (DOU, 2003).
O ajuste de preços de medicamentos tem como referência o mais recente preço do fabricante (PF). Por sua vez, o preço máximo ao consumidor (PMC) é obtido por meio da divisão do PF pelos fatores calculados, levando em conta as cargas tributárias do imposto sobre circulação de mercadorias e serviços (ICMS). As unidades de comércio varejista devem manter à disposição dos consumidores e dos órgãos de defesa do consumidor as listas dos preços de medicamentos atualizadas, contendo PF e PMC (Souza et al., 2021).
De acordo com Souza et al. (2021), o atual modelo de reajuste de preços tem utilizado PMCs descolados da realidade, aumentando a assimetria de informação e possibilitando futuros aumentos abusivos. Modelos regulatórios baseados em teto de preços, como o utilizado no Brasil, pressupõem realinhamentos periódicos dos preços aos valores de mercado a cada dois até, no máximo, cinco anos. No Brasil, este modelo permanece há 16 anos em vigor, sem qualquer realinhamento, com consequentes distorções acumuladas entre PMC e preços praticados. O fato de não se realizar avaliações periódicas dos preços praticados no mercado, ajustando o PMC para algo mais próximo da realidade do mercado parece ser um problema bastante relevante e com implicações para a eficácia da regulação e para o bem-estar dos consumidores.
O Senado analisa um projeto de lei que pode alterar as regras para a definição dos preços de medicamentos no Brasil. O PL 5591/2020, de autoria do senador Fabiano Contarato (ES), prevê entre outras coisas a possibilidade de reajustar os valores para baixo, inexistente até os dias atuais, e coloca novos requisitos de transparência para a indústria farmacêutica com o objetivo de garantir preços-teto mais justos. Enquanto isso não ocorre, cabe ao consumidor pesquisar cada vez mais a variação de preços em cada drogaria, pelo medicamento de referência e o genérico, e a optar pela versão mais barata para que isso não o impacte financeiramente. 

1.1. O problema abordado neste trabalho consiste nas dificuldades enfrentadas pelos consumidores brasileiros para comparar o preço de medicamentos em farmácias pesquisando em diversos sites, aplicativos ou indo até os estabelecimentos.  
  
1.2 Com o intuito de proporcionar a comparação do preço de medicamentos em farmácias distintas, em uma única aplicação, foram estabelecidos os objetivos a seguir.

1.2.1 O objetivo geral deste projeto é desenvolver uma aplicação Web Front-End que permita aos seus usuários a comparação do preço de medicamentos em diversas farmácias com maior agilidade e praticidade.

1.2.1 Como objetivos específicos deste projeto, pode-se listar:
- disponibilizar o contato das farmácias para que o usuário possa verificar a disponibilidade dos produtos desejados;
- demonstrar a distância do endereço do usuário até a farmácia escolhida por ele;
- proporcionar a criação de alertas de preço para que o usuário seja notificado quando o medicamento alcançar valor igual ou inferior ao que for estabelecido;
- permitir que o usuário crie uma lista de produtos de maior interesse para acesso e acompanhamento mais fácil.
	
1.3. Justificativa: Os resultados de um estudo de Souza et al. (2021) mostram uma diferença no comportamento dos preços praticados na venda de medicamentos de referência e genéricos em relação ao PMC. Com base nesses estudos, pode-se observar que os medicamentos genéricos, em sua maioria (72%), tendiam a praticar diferenças médias percentuais de preços que estavam mais de 40% abaixo do PMC (20%) e a maioria dos medicamentos de referência (88%) tendia a praticar diferenças médias percentuais que estavam menos de 40% abaixo do PMC (20%). Com o aumento de 10,08% estabelecido pelo CMED em 2021, o IDEC (Instituto Brasileiro de Defesa do Consumidor) vem alertando que o aumento sentido pelos consumidores nas farmácias pode ser ainda maior, conforme relata Ana Carolina Navarrete, coordenadora do Programa de Saúde do IDEC: "A tabela da CMED é uma ficção porque o preço estabelecido logo na chegada de um novo produto farmacêutico ao país é, na maior parte das vezes, artificialmente alto. Na prática, isso significa que o preço que pagamos na farmácia depende dos supostos descontos aplicados pelas empresas – e isso faz com que os valores possam variar duas, três ou quatro vezes e, ainda assim, estar dentro dos limites da regulação. [...] O que vemos é que as distorções que começam com a definição dos preços de entrada apenas aumentam com o passar dos anos, colocando os consumidores – e principalmente aqueles que dependem de tratamentos contínuos – em uma situação muito desfavorável (NAVARRETE)".   Portanto, este projeto se justifica pois os consumidores cada vez mais buscam por menores preços de medicamentos e possuem, para tal, diversas opções de farmácias, podendo ter cada uma com seu respectivo aplicativo de orçamento. Considerando possíveis dificuldades de locomoção de idosos e a vida agitada e corrida da população adulta, uma aplicação que facilite e agilize a comparação de preços de diversas farmácias simultaneamente se faz bastante útil.
	
1.4. O público-alvo deste projeto são adultos e idosos que compram regularmente ou esporadicamente medicamentos em farmácias e necessitam de cotações com agilidade e fácil acesso. Entende-se que muitos adultos usam um ou mais medicamentos em seu dia a dia, além de comprarem medicamentos para filhos e familiares. Além disso, idosos, em grande parte, são poli-medicados, fazendo compras com regularidade, além de poderem apresentar dificuldades de locomoção. 
	
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
  	
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

- Luzia Silva: desejo encontrar uma plataforma de comparação de preços que apresente os valores dos medicamentos em diferentes farmácias da região para economizar tempo e dinheiro na compra dos remédios para controle da diabetes. 
- Luzia Silva: desejo poder fazer buscas por nome do medicamento e receber informações detalhadas sobre as diferentes opções disponíveis nas farmácias próximas a minha casa para encontrar o melhor preço para os medicamentos que utilizo. 
- Carolina Souza: desejo ter acesso às informações de contato das farmácias para poder entrar em contato e tirar dúvidas sobre a disponibilidade do produto. 
- Carolina Souza: desejo criar uma lista de favoritos com os medicamentos que utilizo com frequência para monitorar os preços e receber alertas quando houver promoções. 
- José Silva: desejo poder compartilhar minhas buscas e resultados nas redes sociais para ajudar outras pessoas que estejam passando por situações semelhantes. 
- José Silva: desejo ter a opção de filtrar as buscas por região ou bairro para encontrar as farmácias mais próximas de mim. 
- Marcos Castro: desejo fornecer acesso ao seu estoque e seus preços para clientes diferentes dos que ele já tem para conseguir novos clientes, aumentando sua renda. 
- Marcos Castro: desejo ter dados sobre os medicamentos mais procurados em aplicativos de orçamento e o perfil dos clientes que procuram para trabalhar melhor suas estratégias de divulgação de acordo com os interesses dos clientes. 
	
2.3. Requisitos do Projeto 
	
Constituem requisitos funcionais, que descrevem as possibilidades de interação dos usuários, e requisitos não funcionais, que descrevem os aspectos que o sistema deverá apresentar de maneira geral, elencados nesta seção. 

2.3.1 Requisitos Funcionais 
	
A seguir são apresentados os requisitos funcionais do projeto, indicando a prioridade em que devem ser entregues. 
	
- RF-01: Prioridade alta. O site deve possuir uma página principal com informações que apresentem o aplicativo e permitam ao usuário buscar algum medicamento. 
- RF-02: Prioridade alta. O site deve apresentar uma página com o resultado da pesquisa feita pelo usuário e comparação do preço do medicamento consultado em farmácias diferentes. 
- RF-03: Prioridade média. O site deve mostrar a localização e contato das farmácias. 
- RF-04: Prioridade baixa. O site deve permitir que o usuário faça uma lista de favoritos. 
- RF-05: Prioridade baixa. O site deve permitir que o usuário compartilhe o resultado de sua pesquisa nas redes sociais. 
- RF-06: Prioridade baixa. O site deve permitir que o usuário ative alertas de preço dos medicamentos e enviar um e-mail quando o preço for alcançado. 
	
2.3.2 Requisitos Não Funcionais 
	
O projeto deverá atender também os requisitos não funcionais, descritos a seguir. 
	
- RNF-01: Prioridade alta. O site deve ser desenvolvido utilizando-se a plataforma de hospedagem e controle de versão de código GitHub. 
- RNF-02: Prioridade alta. O site deve ser responsivo permitindo a visualização em um celular de forma adequada. 
- RNF-03: Prioridade alta. O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) 
- RNF-04: Prioridade média. O site deve ter bom nível de contraste entre os elementos da tela. 
	
2.3.3 Restrições 
	
Este projeto possui algumas limitações e deve respeitar parâmetros previamente estabelecidos, conforme descrito a seguir. 
	
- RE-01: O projeto deve respeitar os prazos das etapas estabelecidos no cronograma da disciplina. 
- RE-02: A solução deve ser implementada em sua íntegra e apresentada até o dia 25/06/2023. 
- RE-03: O aplicativo não pode utilizar back-end. 
- RE-04: A solução e o projeto devem ser desenvolvidos pela equipe do projeto.  
	
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
	
A metodologia consiste nas definições de ferramentas utilizadas pela equipe tanto para a manutenção do código fonte quanto para a organização do time na execução das tarefas do projeto.  
	
3.1. Relação de Ambientes de Trabalho 
	
Os artefatos do projeto serão desenvolvidos nas plataformas apresentadas pelo quadro a seguir. 

- Repositório de código fonte: GitHub: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t9-time2-comparafarma 
- Documentos do projeto: GitHub: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t9-time2-comparafarma 
- Projeto de Interface e Wireframes: -
- Gerenciamento do Projeto: Trello: https://trello.com/b/EH10wmgQ/comparafarma 

3.2. Gerenciamento do Projeto 

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para a definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira: 
- Product Owner: Marco Rodrigo Costa 
- Scrum Master: Christiane Curi Pereira  
- Equipe de Desenvolvimento: Bruno Henrique Comassetto, Gabriel Mautone Costa, Jonathan Francisco Rocha de Castro, Murilo Henrique Souza Ignacio e Priscila Amaral Diniz 

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes colunas: 
- Backlog: contém as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista. 
- A fazer: esta lista representa o Sprint Backlog. Nela constam as atividades pendentes a serem iniciar. 
- Em andamento: nesta coluna constam os sprints que estão sendo realizados, ou seja, as atividades que estão em curso. 
- Fase de testes: Lista as tarefas que estão passando pelo controle de qualidade antes de serem entregues ao cliente. 
- Concluído: Nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias nessas versões. 

O quadro kanban do grupo desenvolvido na ferramenta de gerenciamento de projetos está disponível através da URL https://trello.com/b/EH10wmgQ/comparafarma.

A organização da metodologia de trabalho é baseada no método Scrum e efetivado em sprints, sendo a seguir apresentada uma lista de sprints planejadas pelo grupo. O planejamento é de que cada sprint tenha duração de 7 dias, com entrega de artefatos intermediários.  
A seguir são apresentadas algumas sprints que foram elaboradas como previsão de trabalho, já na ordem de sua execução, de acordo com as prioridades dos requisitos e Product backlog: 
1. Criação da área de trabalho no Trello; 
2. Inserção do projeto no GitHub; 
3. Definição do Fluxo do Usuário 
4. Projeto de interface da tela 1; 
5 Projeto de interface da tela 2; 
6. Atualização dos dados no GitHub; 
7. Projeto de interface da tela 3; 
8. Projeto de interface da tela 4; 
9. (...) 
	
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
	
A interface do ComparaFarma prevê tela inicial e telas posteriores a serem acessadas pelos usuários. Para tal, a equipe elaborou fluxos de telas, tanto na visão do cliente como do dono do estabelecimento de venda de medicamentos. 

4.1. Fluxo do Usuário  

De acordo com as histórias de usurários relatadas, sabe-se que o principal usuário do sistema será o cliente que compra medicamentos e busca comparar E o outro usuário do sistema ComparaFarma é o dono da Farmácia, que insere seus produtos a serem vendidos e acompanha os acessos dos clientes. Assim, foi estabelecido o fluxo para estes usuário. 
		
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template padrão do Site.md"> Template padrão do Site</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/11-Referências.md"> Referências</a></li>
</ol>

# Hospedagem

- Insira o endereço eletrônico público de acesso ao conteúdo publicado.

# Armazenamento do Código-Fonte

- <a href="src/README.md">Código Fonte</a>

# Armazenamento da Apresentação

- <a href="presentation/README.md">Apresentação da solução</a>
