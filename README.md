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
-	disponibilizar o contato das farmácias para que o usuário possa verificar a disponibilidade dos produtos desejados;
-	demonstrar a distância do endereço do usuário até a farmácia escolhida por ele;
-	proporcionar a criação de alertas de preço para que o usuário seja notificado quando o medicamento alcançar valor igual ou inferior ao que for estabelecido;
-	permitir que o usuário crie uma lista de produtos de maior interesse para acesso e acompanhamento mais fácil.

1.3. Justificativa: Os resultados de um estudo de Souza et al. (2021) mostram uma diferença no comportamento dos preços praticados na venda de medicamentos de referência e genéricos em relação ao PMC. Com base nesses estudos, pode-se observar que os medicamentos genéricos, em sua maioria (72%), tendiam a praticar diferenças médias percentuais de preços que estavam mais de 40% abaixo do PMC (20%) e a maioria dos medicamentos de referência (88%) tendia a praticar diferenças médias percentuais que estavam menos de 40% abaixo do PMC (20%). Com o aumento de 10,08% estabelecido pelo CMED em 2021, o IDEC (Instituto Brasileiro de Defesa do Consumidor) vem alertando que o aumento sentido pelos consumidores nas farmácias pode ser ainda maior, conforme relata Ana Carolina Navarrete, coordenadora do Programa de Saúde do IDEC: "A tabela da CMED é uma ficção porque o preço estabelecido logo na chegada de um novo produto farmacêutico ao país é, na maior parte das vezes, artificialmente alto. Na prática, isso significa que o preço que pagamos na farmácia depende dos supostos descontos aplicados pelas empresas – e isso faz com que os valores possam variar duas, três ou quatro vezes e, ainda assim, estar dentro dos limites da regulação. [...] O que vemos é que as distorções que começam com a definição dos preços de entrada apenas aumentam com o passar dos anos, colocando os consumidores – e principalmente aqueles que dependem de tratamentos contínuos – em uma situação muito desfavorável (NAVARRETE)".   Portanto, este projeto se justifica pois os consumidores cada vez mais buscam por menores preços de medicamentos e possuem, para tal, diversas opções de farmácias, podendo ter cada uma com seu respectivo aplicativo de orçamento. Considerando possíveis dificuldades de locomoção de idosos e a vida agitada e corrida da população adulta, uma aplicação que facilite e agilize a comparação de preços de diversas farmácias simultaneamente se faz bastante útil.

1.4. O público-alvo deste projeto são adultos e idosos que compram regularmente ou esporadicamente medicamentos em farmácias e necessitam de cotações com agilidade e fácil acesso. Entende-se que muitos adultos usam um ou mais medicamentos em seu dia a dia, além de comprarem medicamentos para filhos e familiares. Além disso, idosos, em grande parte, são poli-medicados, fazendo compras com regularidade, além de poderem apresentar dificuldades de locomoção. 

<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
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
